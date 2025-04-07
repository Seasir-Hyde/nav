---
layoutClass: m-nav-layout
outline: [2, 3, 4]
---

<!-- <script setup>
import { NAV_DATA } from './data'
// import { FaceBook_DATA } from './data'

</script>
<style src="./index.scss"></style>

<!-- nav页面网页前半不符标题 -->

<!-- # SaleSmartly -->

<!-- <MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/> -->

<!-- <br />
<MNavLinks v-for="{title, items} in FaceBook_DATA" :title="title" :items="items"/>

<br /> -->

# 内部导航网

## 免责声明

::: warning 提示

- 本`内部导航网`（以下简称“本站”）仅作为公司内部资源和常用网站的导航工具使用。`请勿将网站外泄！`使用本站，您已同意以下免责声明内容：

- 信息准确性： 本站所提供的链接和信息仅供参考，虽然我们会尽力确保其准确性和及时性，但本站不对信息的准确性、完整性或时效性做任何保证。使用本站提供的任何信息或链接前，请自行核实相关内容的准确性。

- 外部链接： 本站中的某些链接可能会指向非本站控制的第三方网站。这些外部网站的内容、隐私政策或实践均不受本站控制或负责。本站不对这些外部链接的内容、隐私政策或任何其他方面做出任何担保或承诺，访问外部链接需自行承担风险。

- 免责声明修改： 本站保留随时修改、更新本免责声明内容的权利，且无需事先通知。建议用户定期查看本免责声明，以了解最新内容。

- 隐私保护： 本站不会收集、存储或分享用户的个人信息，但部分外部链接可能涉及个人信息的提交，用户在使用外部链接时应自行判断和注意相关网站的隐私政策。

- 服务可用性： 本站无法保证服务的持续性和不间断性。由于技术问题、维护或其他原因，本站可能会暂时无法访问或功能受限。我们不对因本站服务中断或故障引起的任何损失承担责任。

- 版权和商标： 本站上的所有内容，包括但不限于文本、图像、图标和软件，均引用第三方网站资源

- 用户行为： 用户在本站上的行为必须符合公司的内部政策和相关法律法规。禁止利用本站进行任何非法活动、恶意攻击或不正当行为。对于任何因用户违反规定或法律行为导致的后果，本站不承担责任

- 修改和更新： 本免责声明的条款可能会随时更改，本站保留对免责声明进行修订的权利。用户继续使用本站即视为接受修改后的免责声明条款。
  :::

## 代码提交规范

添加所有更改

```bash
git add .
```

提交暂存区的更改

```bash
git commit -m "feat(auth): 输入您提交的内容信息"
```

推送更改到远程仓库

```bash
git push
```

## 安装运行

### 安装依赖

```bash
pnpm install
```

### 本地开发环境启动

```bash
pnpm dev
```

### 生产环境打包

```bash
pnpm build
```

## 常见的提交类型及示例

```bash
新增功能 (Feature): git commit -m "feat(payment): add credit card option"
修复 Bug (Fix): git commit -m "fix(auth): correct token expiration handling"
文档更新 (Docs): git commit -m "docs(readme): update API documentation"
代码重构 (Refactor): git commit -m "refactor(user): improve data fetching logic"
样式更改 (Style): git commit -m "style(header): adjust spacing and font size"
性能优化 (Perf): git commit -m "perf(loader): optimize image loading"
测试 (Test): git commit -m "test(auth): add unit tests for login functionality"
构建系统更改 (Build): git commit -m "build(webpack): update configuration"
配置更改 (Config): git commit -m "config(eslint): update rules for best practices"
```

## 待实现功能

- api 接口对接
- 增加搜索功能(vitepress 官方支持本地文档搜索，但不支持这种导航的搜索)
- 一键复制功能

::: tip
该导航由 [maomao](https://github.com/maomao1996) 开发，由[666seasir666](https://github.com/)修改。保留版权声明！
:::
