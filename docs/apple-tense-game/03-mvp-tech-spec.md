# Apple Tense Arena · MVP 技术结构与接口定义

## 1. 技术栈（MVP）
- 框架：Next.js + TypeScript
- 样式：Tailwind CSS
- 状态管理：Zustand（轻量）
- 动画：Framer Motion（MVP），后续可升级 PixiJS
- 图表：Recharts
- 数据：本地 JSON（MVP）-> Supabase（阶段2）

## 2. 前端目录结构（建议）
```txt
src/
  app/
    page.tsx               # 首页
    onboarding/page.tsx
    battle/page.tsx
    result/page.tsx
    review/page.tsx
    library/page.tsx
  components/
    battle/
      AppleStage.tsx
      TenseCardGrid.tsx
      QuizModal.tsx
      BattleHUD.tsx
      BounceLoopTrack.tsx
    result/
      ResultRadarChart.tsx
      MistakePairCard.tsx
    shared/
      TimelineStrip.tsx
      ProgressBar.tsx
  data/
    tenses.json
    quiz-bank.json
  stores/
    battleStore.ts
    progressStore.ts
  lib/
    score.ts
    tense-engine.ts
  types/
    tense.ts
    quiz.ts
```

## 3. 核心类型定义
```ts
export type TenseId =
  | 'present_simple' | 'present_continuous' | 'present_perfect' | 'present_perfect_continuous'
  | 'past_simple' | 'past_continuous' | 'past_perfect' | 'past_perfect_continuous'
  | 'future_simple' | 'future_continuous' | 'future_perfect' | 'future_perfect_continuous';

export interface TenseSkill {
  id: TenseId;
  name: string;
  cost: number;
  cooldownMs: number;
  effectType: 'tick' | 'burst' | 'stack';
  baseValue: number;
  learningAnchor: string;
}

export interface QuizItem {
  id: string;
  tenseId: TenseId;
  prompt: string;
  options: string[];
  answerIndex: number;
  explanation: string;
  mistakePair?: [TenseId, TenseId];
}
```

## 4. 状态流（Battle）
1. `idle`：等待玩家选技能
2. `quiz_open`：弹题
3. `judge`：判题
4. `cast_success` 或 `cast_fail`
5. `loop_drop`：第一次掉落
6. `loop_bounce`：弹回空中
7. `loop_drop_again`：二次掉落
8. `apply_effect`：结算生命/疲劳/伤痕
9. `next_turn`

### 4.1 Bounce Torture Loop 动画参数
```ts
export interface BounceLoopConfig {
  dropMs: number;
  bounceMs: number;
  secondDropMs: number;
  loopCount: number;
  damping: number; // 每次反弹高度衰减
}

export const defaultLoop: BounceLoopConfig = {
  dropMs: 450,
  bounceMs: 280,
  secondDropMs: 380,
  loopCount: 2,
  damping: 0.72,
};
```

## 5. 本地接口契约（MVP）
- `GET /api/tenses`：返回 12 技能基础参数
- `GET /api/quiz?tenseId=...`：按时态抽题
- `POST /api/battle/submit`
  - 入参：`{ tenseId, quizId, selectedIndex, elapsedMs }`
  - 出参：`{ correct, deltaHp, deltaStress, explanation }`
- `GET /api/result/:runId`：返回本局统计与易错对

## 6. 打分模型（简单版）
- `score = correctCount * 100 + combo * 20 - wrongCount * 30 - totalTimeSec`
- 结算维度：
  - `accuracy_by_tense`
  - `mistake_pair_top3`
  - `survival_time`

## 7. 迭代路线
- Sprint 1：4 时态 + 单局流程跑通
- Sprint 2：扩到 12 时态 + 复盘页
- Sprint 3：账号与云端存档 + 视频导出
