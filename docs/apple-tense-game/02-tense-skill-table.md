# Apple Tense Arena · 12 时态技能表（设计/程序共用）

| ID | 时态 | 触发文案 | 游戏效果 | 动画/音效 | 教学锚点 |
|---|---|---|---|---|---|
| T1 | Present Simple | Nature never asks. | 固定周期伤害（每3秒-1） | 心跳+轻震 | 习惯/规律/事实 |
| T2 | Present Continuous | It is happening now. | 持续挤压5秒 | 挤压变形+摩擦声 | 正在进行 |
| T3 | Present Perfect | It has already happened. | 立即结算一层“结果伤痕” | 闪白后留下伤痕 | 已完成且影响现在 |
| T4 | Present Perfect Continuous | It has been going on. | 按持续时长叠加疲劳值 | 呼吸急促+持续抖动 | 从过去持续到现在 |
| T5 | Past Simple | It happened. Period. | 单次回放重击 | 倒带后重锤 | 过去已结束事件 |
| T6 | Past Continuous | It was happening then. | 指定过去时点持续伤害 | 慢镜头下坠 | 过去某时正在进行 |
| T7 | Past Perfect | It had happened before that. | 先后链：先成熟后坠落 | 双阶段特效 | 过去的过去 |
| T8 | Past Perfect Continuous | It had been happening. | 在历史窗口累计压伤继承 | 灰阶蒙层+滴答声 | 到过去某点的持续 |
| T9 | Future Simple | It will happen. | 3秒后落下打击 | 倒计时警报 | 将来会发生 |
| T10 | Future Continuous | It will be happening. | 未来时段内持续损耗 | 未来投影+持续电流 | 将来某时正在进行 |
| T11 | Future Perfect | It will have happened by then. | 截止点到达后强制结算 | 截止线切屏 | 到未来某点前完成 |
| T12 | Future Perfect Continuous | It will have been happening. | 未来截止点前按时长预扣耐久 | 长条计时+压迫低频 | 到未来某点已持续多久 |

## 统一参数建议
- 冷却：普通技能 6s，高级技能（Perfect 系）9s
- 成本：Simple 1 点，Continuous 2 点，Perfect 3 点，Perfect Continuous 4 点
- 难度：每过一关，题目时间 -2s，错误惩罚 +10%

## 题目触发规则
1. 玩家点技能卡。
2. 系统抽取对应时态题（结构/语义/时间线）。
3. 答对：释放完整技能；答错：释放弱化技能并展示解释。
4. 记录 `tense_accuracy` 与 `mistake_pair`。
