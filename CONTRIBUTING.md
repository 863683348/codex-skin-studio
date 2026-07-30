# Contributing Guide

感谢你考虑为 Codex Skin Studio 贡献！

## 开发流程

1. Fork 本仓库
2. 创建功能分支 (`git checkout -b feat/amazing-feature`)
3. 提交更改 (`git commit -m 'feat: add amazing feature'`)
4. 推送到分支 (`git push origin feat/amazing-feature`)
5. 提交 Pull Request

## 代码规范

- 使用 TypeScript 强类型
- 遵循 ESLint 配置
- 组件使用函数组件 + Hook
- CSS 使用 Tailwind utility classes + CSS 变量 Token
- i18n 文案走 `getDict()`，不硬编码

## 提交规范

遵循 Conventional Commits：

```
feat: 新功能
fix: Bug 修复
docs: 文档更新
style: 代码格式
refactor: 重构
perf: 性能优化
test: 测试
chore: 构建/工具
```

## Pull Request 检查清单

- [ ] 代码通过 `npm run build` 构建
- [ ] 类型检查通过 (`npm run type-check`)
- [ ] 无 ESLint 错误 (`npm run lint`)
- [ ] 中英文双语文案均已添加
- [ ] 移动端 375px 适配已验证
