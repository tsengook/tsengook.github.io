# Apple Tense 独立页面模块（微信小程序）

这是可直接拷贝到任意微信小程序项目的页面模块。

## 安装步骤
1. 复制目录 `miniapp/module/apple-tense-page` 到你的项目，例如：
   - `your-miniapp/pages/apple-tense/`
2. 在你的小程序 `app.json` 中新增页面路由：
```json
{
  "pages": [
    "pages/apple-tense/index"
  ]
}
```
3. 在微信开发者工具中编译运行。

## 模块包含
- 12 个时态技能按钮。
- 题目回答后触发 **Drop -> Bounce -> Drop Again** 循环动画。
- 连击、HP、循环次数基础状态。

## 本地模拟运行（无需微信开发者工具）
```bash
node miniapp/module/apple-tense-page/simulate.js
```

该脚本会模拟两种场景（答对/答错）并做断言校验，输出 PASS/FAIL。

## 可改参数
- `index.js` 里 `loops`：是否 2 次 / 4 次循环。
- `dropDistance`：掉落幅度。
- `quizBank`：替换为你的正式题库。
