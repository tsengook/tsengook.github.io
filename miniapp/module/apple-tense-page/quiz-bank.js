const quizBank = {
  present_simple: [
    {
      scene: '每天早晨',
      prompt: 'My dad usually ___ an apple before work.',
      options: ['eats', 'is eating', 'ate', 'has eaten'],
      answer: 0,
      explain: 'usually 表示习惯动作，用一般现在时。',
      lps: {
        listen: 'usually / every day',
        pattern: '主语 + 动词原形/三单',
        speak: '造句：我妈妈每天喝咖啡。'
      }
    },
    {
      scene: '客观事实',
      prompt: 'Apples ___ from flowers on trees.',
      options: ['grow', 'are growing', 'grew', 'have grown'],
      answer: 0,
      explain: '客观事实用一般现在时。',
      lps: {
        listen: '事实定义句',
        pattern: '普遍规律 -> Present Simple',
        speak: '造句：Water boils at 100°C.'
      }
    }
  ],
  present_continuous: [
    {
      scene: '正在吃早餐',
      prompt: 'Look! Tom ___ an apple right now.',
      options: ['eats', 'is eating', 'ate', 'has eaten'],
      answer: 1,
      explain: 'right now 强调此刻进行中，用 is eating。',
      lps: {
        listen: 'look / right now',
        pattern: 'am/is/are + doing',
        speak: '造句：I am waiting for the bus now.'
      }
    },
    {
      scene: '视频通话中',
      prompt: 'We ___ about lunch at the moment.',
      options: ['talk', 'are talking', 'talked', 'have talked'],
      answer: 1,
      explain: 'at the moment 表示当下进行，用 are talking。',
      lps: {
        listen: 'at the moment',
        pattern: '进行中的动作',
        speak: '造句：He is doing homework now.'
      }
    }
  ],
  present_perfect: [
    {
      scene: '午饭后',
      prompt: 'I ___ my apple already, so I am full.',
      options: ['eat', 'ate', 'have eaten', 'had eaten'],
      answer: 2,
      explain: 'already + 现在结果（我饱了）= 现在完成时。',
      lps: {
        listen: 'already / yet',
        pattern: 'have/has + done',
        speak: '造句：I have finished my work.'
      }
    },
    {
      scene: '统计次数',
      prompt: 'She ___ that healthy recipe three times.',
      options: ['tries', 'tried', 'has tried', 'is trying'],
      answer: 2,
      explain: '到现在的次数经验，用 has tried。',
      lps: {
        listen: 'three times',
        pattern: '过去到现在的经验',
        speak: '造句：He has visited Beijing twice.'
      }
    }
  ],
  present_perfect_continuous: [
    {
      scene: '排队买水果',
      prompt: 'We ___ here for 20 minutes.',
      options: ['wait', 'have waited', 'have been waiting', 'waited'],
      answer: 2,
      explain: 'for + 一段时间，强调持续过程，用 have been waiting。',
      lps: {
        listen: 'for/since + 时间',
        pattern: 'have/has been doing',
        speak: '造句：I have been reading for an hour.'
      }
    },
    {
      scene: '健身打卡',
      prompt: 'He ___ every morning since May.',
      options: ['runs', 'has run', 'has been running', 'ran'],
      answer: 2,
      explain: 'since + 起点，强调持续习惯过程，用 has been running。',
      lps: {
        listen: 'since May',
        pattern: '持续到现在',
        speak: '造句：She has been practicing piano since 2023.'
      }
    }
  ],
  past_simple: [
    {
      scene: '昨晚家庭晚餐',
      prompt: 'I ___ an apple pie last night.',
      options: ['eat', 'ate', 'have eaten', 'am eating'],
      answer: 1,
      explain: 'last night 是明确过去时间，用一般过去时。',
      lps: {
        listen: 'yesterday/last night',
        pattern: '动词过去式',
        speak: '造句：We watched a movie yesterday.'
      }
    },
    {
      scene: '上周日',
      prompt: 'They ___ to the fruit market on Sunday.',
      options: ['go', 'went', 'have gone', 'were going'],
      answer: 1,
      explain: 'on Sunday（过去语境）用 went。',
      lps: {
        listen: '明确过去时间点',
        pattern: '完整已结束事件',
        speak: '造句：He called me this morning.'
      }
    }
  ],
  past_continuous: [
    {
      scene: '公交车上',
      prompt: 'At 7:30, I ___ breakfast on the bus.',
      options: ['ate', 'was eating', 'have eaten', 'eat'],
      answer: 1,
      explain: 'At 7:30 指过去某一时刻正在进行，用 was eating。',
      lps: {
        listen: 'at + 过去时刻',
        pattern: 'was/were + doing',
        speak: '造句：At 9 pm, we were studying.'
      }
    },
    {
      scene: '被打断事件',
      prompt: 'She ___ an apple when the phone rang.',
      options: ['cut', 'was cutting', 'has cut', 'cuts'],
      answer: 1,
      explain: 'when + 短动作打断长动作，长动作用过去进行时。',
      lps: {
        listen: 'when ... rang',
        pattern: '背景动作进行中',
        speak: '造句：I was showering when he called.'
      }
    }
  ],
  past_perfect: [
    {
      scene: '到家前后顺序',
      prompt: 'By the time I got home, my sister ___ dinner.',
      options: ['cooked', 'has cooked', 'had cooked', 'was cooking'],
      answer: 2,
      explain: '过去的过去（先做完）用 had cooked。',
      lps: {
        listen: 'by the time + 过去',
        pattern: 'had + done',
        speak: '造句：He had left before I arrived.'
      }
    },
    {
      scene: '错过车',
      prompt: 'The bus ___ before we reached the stop.',
      options: ['left', 'had left', 'has left', 'was leaving'],
      answer: 1,
      explain: '在 reached 之前已经发生，用 had left。',
      lps: {
        listen: 'before + 过去动作',
        pattern: '先发生动作 -> 过去完成时',
        speak: '造句：They had eaten before the class started.'
      }
    }
  ],
  past_perfect_continuous: [
    {
      scene: '下雨前持续状态',
      prompt: 'They ___ for an hour before the rain started.',
      options: ['walked', 'had walked', 'had been walking', 'were walking'],
      answer: 2,
      explain: 'before + 过去点，且强调持续时长，用 had been walking。',
      lps: {
        listen: 'for an hour before ...',
        pattern: 'had been doing',
        speak: '造句：I had been working for 2 hours before lunch.'
      }
    },
    {
      scene: '考试前复习',
      prompt: 'She was tired because she ___ all night.',
      options: ['studied', 'had studied', 'had been studying', 'was studying'],
      answer: 2,
      explain: '疲惫是持续复习导致，强调过程，用 had been studying。',
      lps: {
        listen: 'because + 状态结果',
        pattern: '过去结果由更早持续动作导致',
        speak: '造句：He was sleepy because he had been driving.'
      }
    }
  ],
  future_simple: [
    {
      scene: '临时决定',
      prompt: 'I am hungry. I ___ an apple.',
      options: ['eat', 'will eat', 'am eating', 'have eaten'],
      answer: 1,
      explain: '临场决定用 will do。',
      lps: {
        listen: 'I am hungry. (当场决定)',
        pattern: 'will + do',
        speak: '造句：I will call you tonight.'
      }
    },
    {
      scene: '天气与计划',
      prompt: 'It ___ sunny tomorrow.',
      options: ['is', 'was', 'will be', 'has been'],
      answer: 2,
      explain: 'tomorrow 明确将来，用 will be。',
      lps: {
        listen: 'tomorrow/next week',
        pattern: '将来预测',
        speak: '造句：She will join us tomorrow.'
      }
    }
  ],
  future_continuous: [
    {
      scene: '明晚八点',
      prompt: 'At 8 pm tomorrow, we ___ dinner.',
      options: ['have', 'will have', 'will be having', 'are having'],
      answer: 2,
      explain: '将来某时正在进行，用 will be having。',
      lps: {
        listen: 'at 8 pm tomorrow',
        pattern: 'will be doing',
        speak: '造句：This time tomorrow, I will be flying.'
      }
    },
    {
      scene: '通勤路上',
      prompt: 'This time next Monday, I ___ to work.',
      options: ['go', 'went', 'will go', 'will be going'],
      answer: 3,
      explain: 'this time next ... 表示将来某时进行，用 will be going。',
      lps: {
        listen: 'this time next ...',
        pattern: '未来进行画面',
        speak: '造句：At noon, he will be meeting clients.'
      }
    }
  ],
  future_perfect: [
    {
      scene: '截止时间',
      prompt: 'By 6 pm, I ___ all my tasks.',
      options: ['finish', 'will finish', 'will have finished', 'have finished'],
      answer: 2,
      explain: 'by + 将来时间点前完成，用 will have finished。',
      lps: {
        listen: 'by + future time',
        pattern: 'will have + done',
        speak: '造句：By next week, we will have moved.'
      }
    },
    {
      scene: '旅行计划',
      prompt: 'By next month, they ___ in Shanghai for a year?',
      options: ['will stay', 'will have stayed', 'have stayed', 'stayed'],
      answer: 1,
      explain: '到下个月这个未来节点，已完成一段时长，用 will have stayed。',
      lps: {
        listen: 'by next month',
        pattern: '未来完成结果',
        speak: '造句：By Friday, she will have finished the report.'
      }
    }
  ],
  future_perfect_continuous: [
    {
      scene: '长期项目',
      prompt: 'By December, I ___ on this project for 2 years.',
      options: ['work', 'will work', 'will have worked', 'will have been working'],
      answer: 3,
      explain: 'by + 将来点 + for 时长，强调持续过程，用 will have been working。',
      lps: {
        listen: 'by ... for 2 years',
        pattern: 'will have been doing',
        speak: '造句：By 2027, he will have been teaching for 10 years.'
      }
    },
    {
      scene: '健身目标',
      prompt: 'Next June, she ___ every day for six months.',
      options: ['will exercise', 'will have exercised', 'will have been exercising', 'has exercised'],
      answer: 2,
      explain: '到未来时间点时已经持续多久，用 will have been exercising。',
      lps: {
        listen: 'next June + for six months',
        pattern: '未来完成进行',
        speak: '造句：By then, we will have been waiting for hours.'
      }
    }
  ]
};

module.exports = { quizBank };
