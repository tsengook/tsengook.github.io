#!/usr/bin/env node
/**
 * Apple Tense 小程序页面逻辑模拟器（Node 环境）
 * 用法：node miniapp/module/apple-tense-page/simulate.js
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { createRequire } = require('module');

const pageFile = path.join(__dirname, 'index.js');
const code = fs.readFileSync(pageFile, 'utf8');
const localRequire = createRequire(pageFile);

let pageDef;
const sandbox = {
  Page: (def) => {
    pageDef = def;
  },
  setTimeout,
  clearTimeout,
  console,
  require: localRequire
};

vm.createContext(sandbox);
vm.runInContext(code, sandbox);

if (!pageDef || !pageDef.data) {
  throw new Error('页面定义加载失败：未找到 Page({ data, ... })');
}

const instance = {
  data: JSON.parse(JSON.stringify(pageDef.data)),
  setData(update) {
    Object.assign(this.data, update);
  }
};

Object.keys(pageDef).forEach((k) => {
  if (k === 'data') return;
  if (typeof pageDef[k] === 'function') {
    instance[k] = pageDef[k].bind(instance);
  }
});

function assert(condition, message) {
  if (!condition) throw new Error(`断言失败: ${message}`);
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}


function validateCoverage() {
  const tenseIds = instance.data.tenses.map((t) => t.id);
  const { quizBank } = localRequire('./quiz-bank');
  tenseIds.forEach((id) => {
    assert(Array.isArray(quizBank[id]) && quizBank[id].length >= 1, `${id} 缺少题目`);
    quizBank[id].forEach((q, idx) => {
      assert(typeof q.scene === 'string' && q.scene.length > 0, `${id}#${idx} 缺少场景`);
      assert(q.lps && q.lps.listen && q.lps.pattern && q.lps.speak, `${id}#${idx} 缺少 LPS 字段`);
    });
  });
}

async function runCase(tenseId, chooseCorrect) {
  instance.onPickTense({ currentTarget: { dataset: { id: tenseId } } });
  assert(instance.data.activeTenseId === tenseId, `activeTenseId 应为 ${tenseId}`);
  assert(!!instance.data.activeQuiz, 'activeQuiz 应被设置');

  const answer = chooseCorrect
    ? instance.data.activeQuiz.answer
    : (instance.data.activeQuiz.answer + 1) % instance.data.activeQuiz.options.length;

  const hpBefore = instance.data.hp;
  const comboBefore = instance.data.combo;

  instance.onAnswer({ currentTarget: { dataset: { index: String(answer) } } });

  assert(instance.data.activeQuiz === null, '回答后 activeQuiz 应清空');
  if (chooseCorrect) {
    assert(instance.data.combo === comboBefore + 1, '答对后 combo 应 +1');
    assert(instance.data.hp === hpBefore, '答对后 hp 不变');
  } else {
    assert(instance.data.combo === 0, '答错后 combo 应归零');
    assert(instance.data.hp <= hpBefore, '答错后 hp 应下降');
  }

  const isContinuous = /continuous/.test(tenseId);
  const expectedLoops = isContinuous ? 4 : 2;
  const waitMs = expectedLoops * 750 + 300;
  await wait(waitMs);

  assert(instance.data.phaseLabel === 'Recovered', '循环结束后 phaseLabel 应为 Recovered');
  assert(instance.data.appleY === 0, '循环结束后 appleY 应回到 0');

  return {
    tenseId,
    chooseCorrect,
    hp: instance.data.hp,
    combo: instance.data.combo,
    totalLoops: instance.data.totalLoops,
    expectedLoops
  };
}

(async function main() {
  console.log('[simulate] start');

  validateCoverage();

  const startLoops = instance.data.totalLoops;

  const case1 = await runCase('present_continuous', true);
  const case2 = await runCase('future_simple', false);

  const deltaLoops = instance.data.totalLoops - startLoops;
  assert(deltaLoops === case1.expectedLoops + case2.expectedLoops, 'totalLoops 累积值不符合预期');

  console.log('[simulate] case1', case1);
  console.log('[simulate] case2', case2);
  console.log('[simulate] PASS ✅ all assertions passed');
})().catch((err) => {
  console.error('[simulate] FAIL ❌', err.message);
  process.exit(1);
});
