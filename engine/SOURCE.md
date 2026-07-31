# engine/ — 换肤引擎（来源说明）

本目录的换肤引擎源码来自上游开源项目：

- **上游仓库**：https://github.com/Fei-Away/Codex-Dream-Skin
- **上游状态**：MIT 许可证（见 `LICENSE`），12,800+ Star，v1.5.9 起 14 个 Release
- **引入版本**：v1.5.9 主线（2026-07-31 clone）
- **引入方式**：`macos/` `windows/` `runtime/` `tools/` 原样复制，保留完整 LICENSE 与 NOTICE

## 为什么引入

Codex Skin Studio 官网需要真实可用的换肤工具。上游引擎经社区大规模验证
（CDP 本机回环注入、不修改 app.asar、一键恢复、CSS 安全校验），
直接复用可让产品"先能跑"，再逐步品牌化与自研。

## 目录结构

| 目录 | 说明 |
|------|------|
| `macos/` | macOS 注入脚本（.command + menubar）与预设主题 |
| `windows/` | Windows 注入脚本、安装器（installer/）与预设主题 |
| `runtime/` | 跨平台运行时资源（CSS 模板、注入器、安全策略校验器） |
| `tools/` | 开发工具（选择器诊断、运行时测试、资源同步） |

## 安全说明

引入前已完成安全审计（2026-07-31）：
- ✅ 无远程代码下载执行
- ✅ CDP 仅绑定 127.0.0.1 回环
- ✅ CSS 有 safe-css-validator 防注入
- ✅ 主题包有 theme-package-validator
- ✅ 唯一 `new Function` 调用为编译期校验（compile-only），不执行

## 构建与发布

- Windows 安装包：`windows/installer/build-release.ps1`（需 Node.js）
- macOS 安装包：需 macOS 环境构建（Windows 上无法产 dmg）
- Release 发布到：https://github.com/863683348/codex-skin-studio/releases
