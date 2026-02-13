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

const quizBank = {
  present_continuous: [
    {
      prompt: 'Look! The apple ___ up and down now.',
      options: ['bounced', 'is bouncing', 'has bounced', 'will bounce'],
      answer: 1,
      explain: '“now”强调此刻进行中，使用 is bouncing。'
    }
  ],
  present_perfect: [
    {
      prompt: 'The apple ___ three times already.',
      options: ['bounces', 'is bouncing', 'has bounced', 'had bounced'],
      answer: 2,
      explain: 'already + 到现在的结果，使用 has bounced。'
    }
  ],
  future_continuous: [
    {
      prompt: 'At 8 pm, the apple ___ again.',
      options: ['will bounce', 'will be bouncing', 'has bounced', 'was bouncing'],
      answer: 1,
      explain: '未来某时正在发生，用 will be bouncing。'
    }
  ]
};

const defaultQuiz = {
  prompt: 'Choose the tense that means “正在反复发生”.',
  options: ['Present Continuous', 'Past Perfect', 'Future Perfect', 'Present Simple'],
  answer: 0,
  explain: '“正在反复发生”一般先想到进行时。'
};

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
    const candidates = quizBank[tenseId] || [defaultQuiz];
    const activeQuiz = candidates[Math.floor(Math.random() * candidates.length)];
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
      message: `${correct ? '✅ 回答正确！' : '❌ 回答错误。'} ${activeQuiz.explain}`,
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
