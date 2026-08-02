# PayPal 订阅对接（Codex Skin Studio Pro/Team）

> 状态：代码已就绪，待配置环境变量后即可收款。
> 上次更新：2026-08-02

## 架构概览

```
用户 → /pricing → 点击「升级 Pro」→ 动态加载 PayPal SDK
  → PayPal 弹窗订阅（createSubscription, plan_id）
  → 订阅成功（onApprove）→ 跳 /pricing/result?subscription_id=xxx
  → 结果页展示「如何解锁 PRO 主题」
  → 卖家在 PayPal 后台看到订阅者 → 运行 gen-license-key.js 签发 Key
  → 买家在托盘「主题库 → 激活 Pro…」输入 Key → HMAC 校验通过 → 10 款 PRO 解锁
```

- 收款：**PayPal Subscriptions**（前端 SDK，无需后端）
- 解锁：**License Key**（HMAC-SHA256，`CSS1-{sig}-{base64url(email|plan|日期)}`，365 天有效）
- 站点为静态导出（`output: 'export'`），因此 Key 签发走**手动流程**（见下文）；自动签发需改造部署（见进阶）

## 一、你要做的配置（一次性，约 20 分钟）

### 1. PayPal 开发者账号
1. 打开 https://developer.paypal.com ，用你的 PayPal 商业账号登录（个人账号可升级）
2. 顶部切换到 **Live**（Production）环境

### 2. 建订阅计划（2 个）
1. 左侧菜单 **Billing → Plans**（如无入口，先进 Products 建两个产品：Pro / Team）
2. 每个产品建一个订阅计划：
   - **Pro**：月付 ¥39（或你定的价）→ 复制 **Plan ID**（形如 `P-XXXXXXXXXXXXXXXXXXXX`）
   - **Team**：月付 ¥99 → 复制 **Plan ID**
3. 计划 ID 保存好，下一步填进 Vercel

### 3. 拿 Client ID
- **Apps & Credentials → Live app**（如无 app 先 Create App）→ 复制 **Client ID**

### 4. 填 Vercel 环境变量
到 Vercel 项目 **Settings → Environment Variables** 新增（重新部署后生效）：

| Key | 值 |
|-----|-----|
| `NEXT_PUBLIC_PAYPAL_CLIENT_ID` | 上一步的 Client ID |
| `NEXT_PUBLIC_PAYPAL_PLAN_PRO` | Pro 订阅 Plan ID |
| `NEXT_PUBLIC_PAYPAL_PLAN_TEAM` | Team 订阅 Plan ID |

> ⚠️ 静态导出下这些变量在**构建时**写入页面，所以填完必须重新部署（push 任意提交 或 手动 Redeploy）。

### 5. 测试
- 建议先用 PayPal **Sandbox**（开发者后台建 Sandbox 测试账号 + Sandbox Client ID + Sandbox Plan）跑通全流程
- 测试成功后把 3 个变量换成 **Live** 值，重新部署上线

## 二、发 License Key（收钱后的关键一步）

### 全自动：PayPal Webhook → Firestore → 自动发 Key 邮件（已上线）
> 代码已部署（Vercel 标准模式，`/api/paypal/webhook`）。启用需完成下方"全自动配置"。

触发链：
```
PayPal 订阅激活(BILLING.SUBSCRIPTION.ACTIVATED)
  → POST /api/paypal/webhook（RSA 签名验证 + 5min 时间窗）
  → 生成 License Key（服务端 HMAC，与客户端一致）
  → 写 Firestore subscriptions/{email}
  → Gmail SMTP 自动发 Key 邮件给买家
取消/暂停/过期 → 更新 Firestore status
```

#### 全自动配置（一次性，约 20 分钟）
1. **Firebase Firestore 建库**：控制台 → Firestore Database → 创建数据库（生产模式）→ 部署 `firestore.rules`（仓库根目录）
2. **Firebase 服务账号**：控制台 → 项目设置 → 服务账号 → 生成新私钥 → 取 3 个字段
3. **PayPal Webhook**：开发者后台 → Webhooks → Create Webhook：
   - URL：`https://codex-skin-studio.shop/api/paypal/webhook`
   - 事件勾选：`BILLING.SUBSCRIPTION.ACTIVATED` / `CANCELLED` / `SUSPENDED` / `EXPIRED` / `APPROVED`
   - 创建后复制 **Webhook ID**
4. **Vercel 环境变量（服务端）**：
   ```
   FIREBASE_PROJECT_ID=       ← 服务账号 project_id
   FIREBASE_CLIENT_EMAIL=     ← 服务账号 client_email
   FIREBASE_PRIVATE_KEY=      ← 服务账号 private_key（Vercel 粘贴时换行保留）
   PAYPAL_WEBHOOK_ID=         ← 第 3 步
   PAYPAL_PLAN_PRO=           ← Pro 计划 ID（与前端 NEXT_PUBLIC_PAYPAL_PLAN_PRO 同值）
   PAYPAL_PLAN_TEAM=          ← Team 计划 ID
   GMAIL_USER=ahmedlzany423@gmail.com
   GMAIL_APP_PASSWORD=        ← 16 位应用专用密码
   ```
5. 重新部署 → 沙箱下单测试 → 检查 Firestore `subscriptions/` 集合 + 买家邮箱

> 会员状态查询接口：`GET /api/me`（Authorization: Bearer <Firebase ID Token>）→ 返回该邮箱的订阅记录与 License Key。

### 一键生成 + 自动邮件（半自动兜底，1 条命令）
> 全自动未启用时用这个（需 Gmail 配置）

```bash
# 在本地项目目录（scripts/ 为本地工具，不提交 git）
node scripts/issue-and-email-key.js buyer@example.com pro [订阅ID]
#   → 自动生成 License Key + 用 GMAIL_USER 发中英双语 HTML 邮件（含 Key + 激活步骤）
node scripts/issue-and-email-key.js --dry-run buyer@example.com pro   # 只生成不发送
```

### Gmail 配置（一次性）
1. Google 账户 → **安全性** → 开启**两步验证**
2. 安全性 → **应用专用密码** → 生成 16 位密码（应用选"其他"，如 Codex Skin Studio）
3. 在 `website/.env.local` 写入（**勿提交 git**）：
   ```
   GMAIL_USER=ahmedlzany423@gmail.com
   GMAIL_APP_PASSWORD=<16 位应用专用密码>
   GMAIL_SMTP_HOST=smtp.gmail.com
   ```

### 纯手动签发（无 Gmail 时兜底）
```bash
# 在本地项目目录
node scripts/gen-license-key.js buyer@example.com pro
# 输出:
#   License Key: CSS1-xxxx-xxxx
#   expires: 2027-08-01
```
把 Key 发给买家（邮件/站内信均可）。买家在托盘「主题库 → 激活 Pro…」输入即解锁。

> 买家邮箱/Plan 从 PayPal 后台的订阅记录里看。Team 方案签发时第二个参数传 `team`。

### 进阶：自动签发（PayPal Webhook + Serverless）
当订阅量大后，可改造为自动发 Key：

1. 站点去掉 `output: 'export'`，改 Vercel 标准部署（页面仍可用静态生成，但启用 API Routes）
2. 新增 `src/app/api/paypal/webhook/route.ts`：
   - 校验 PayPal Webhook 签名（`PAYPAL_WEBHOOK_ID`）
   - 事件 `BILLING.SUBSCRIPTION.ACTIVATED` → 读订阅者邮箱 + Plan → 用服务端密钥生成 License Key → 通过 Resend/SendGrid 发邮件
3. 在 PayPal 开发者后台配置 Webhook URL：`https://codex-skin-studio.shop/api/paypal/webhook`

**代价**：需要把 HMAC 私钥放服务端（更安全），且站点不再纯静态。当前量级不划算，量大了再做。

## 三、代码位置

| 文件 | 职责 |
|------|------|
| `src/components/views/PricingView.tsx` | PayPal SDK 加载 + 订阅按钮 + onApprove 跳转 |
| `src/components/views/PaymentResultView.tsx` | 结果页（成功展示解锁引导 / 取消） |
| `src/lib/i18n/locales/{zh,en}.ts` | `paymentResult` 文案 |
| `scripts/gen-license-key.js` | License Key 生成器（卖家用） |
| `engine/windows/scripts/license-dream-skin.ps1` | 客户端 Key 校验 + 持久化 |
| `engine/windows/scripts/tray-dream-skin.ps1` | 托盘「主题库」「激活 Pro…」菜单 |

## 四、常见问题

- **按钮显示「即将上线」** → 3 个环境变量没配全（构建时为空）
- **订阅成功但没收到 Key** → 手动流程下你需要在 PayPal 后台确认订阅后主动签发；页面已引导买家联系你
- **Key 无效** → 检查大小写/空格，或确认有效期（365 天）
- **想改价格** → PayPal 后台改 Plan 价格（生效于新订阅）
