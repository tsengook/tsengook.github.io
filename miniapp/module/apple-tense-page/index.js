const tenseMap = [
  { id: 'present_simple', short: 'PS' },
  { id: 'present_continuous', short: 'PC' },
  { id: 'present_perfect', short: 'PP' },
  { id: 'present_perfect_continuous', short: 'PPC' },
  { id: 'past_simple', short: 'PaS' },
  { id: 'past_continuous', short: 'PaC' },
  { id: 'past_perfect', short: 'PaP' },
  { id: 'past_perfect_continuous', short: 'PaPC' },
  { id: 'future_simple', short: 'FS' },
  { id: 'future_continuous', short: 'FC' },
  { id: 'future_perfect', short: 'FP' },
  { id: 'future_perfect_continuous', short: 'FPC' }
];

const { quizBank } = require('./quiz-bank');

function pickQuizByTense(tenseId) {
  const candidates = quizBank[tenseId];
  if (candidates && candidates.length) return candidates[Math.floor(Math.random() * candidates.length)];
  const fallback = quizBank.present_simple;
  return fallback[Math.floor(Math.random() * fallback.length)];
}

Page({
  data: {
    tenses: tenseMap,
    hp: 100,
    combo: 0,
    totalLoops: 0,
    appleY: 0,
    loopPhase: 'idle',
    phaseLabel: 'Ready',
    activeQuiz: null,
    activeTenseId: '',
    message: ''
  },

  onPickTense(e) {
    const tenseId = e.currentTarget.dataset.id;
    const activeQuiz = pickQuizByTense(tenseId);
    this.setData({
      activeTenseId: tenseId,
      activeQuiz,
      message: ''
    });
  },

  onAnswer(e) {
    const selected = Number(e.currentTarget.dataset.index);
    const { activeQuiz, activeTenseId } = this.data;
    if (!activeQuiz) return;

    const correct = selected === activeQuiz.answer;
    const combo = correct ? this.data.combo + 1 : 0;
    const hp = correct ? this.data.hp : Math.max(0, this.data.hp - 8);

    this.setData({
      combo,
      hp,
      message: `${correct ? '✅ 回答正确！' : '❌ 回答错误。'} ${activeQuiz.explain}\n[L]${activeQuiz.lps.listen} | [P]${activeQuiz.lps.pattern} | [S]${activeQuiz.lps.speak}`,
      activeQuiz: null
    });

    this.runBounceLoop(activeTenseId, correct);
  },

  runBounceLoop(tenseId, correct) {
    const isContinuous = /continuous/.test(tenseId);
    const loops = isContinuous ? 4 : 2;
    const dropDistance = correct ? 120 : 160;

    let loopIndex = 0;

    const tick = () => {
      if (loopIndex >= loops) {
        this.setData({
          loopPhase: 'idle',
          phaseLabel: 'Recovered',
          appleY: 0,
          totalLoops: this.data.totalLoops + loops
        });
        return;
      }

      this.setData({ loopPhase: 'drop', phaseLabel: 'Drop', appleY: dropDistance });
      setTimeout(() => {
        this.setData({ loopPhase: 'bounce', phaseLabel: 'Bounce', appleY: -Math.round(dropDistance * 0.45) });
        setTimeout(() => {
          this.setData({ loopPhase: 'drop-again', phaseLabel: 'Drop Again', appleY: Math.round(dropDistance * 0.7) });
          setTimeout(() => {
            this.setData({ appleY: 0 });
            loopIndex += 1;
            setTimeout(tick, 80);
          }, 220);
        }, 180);
      }, 220);
    };

    tick();
  }
});
