# Apple Tense Arena MiniApp 依赖说明

## 安装
```bash
cd miniapp
npm install
```

## 开发/构建
```bash
npm run dev
npm run build:weapp
npm run lint
npm run typecheck
```

## 说明
- 采用 **Taro + React + TypeScript** 构建微信小程序页面。
- `lottie-miniprogram` 用于轻量播放“掉落/反弹”动画。
- `zustand` 用于管理战斗状态（题目、分数、连击、循环阶段）。
