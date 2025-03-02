# [api 常见问题](https://alidocs.dingtalk.com/i/nodes/G1DKw2zgV2gQpK4Nh1A4dke3JB5r9YAn)

## `chat_user_id` 如何获取？

建议是通过获[获取客户列表](https://apifox.com/apidoc/shared-3e66aa38-1e0a-40c7-bf58-c350da69bcb7)接口去拿哈

## webhook 支持消息类型

目前暂时 webhook 只支持文本消息，webhook 不支持音频，详情查看[webhook 文档](https://help.salesmartly.com/docs/webhook)

## 输入框遮挡

<video controls src="https://assets-cdn.salesmartly.com/prod/project/fj3mnx/p1/material/video/20250302/1740902047548/file_51026.mp4" title="Title" width="300px" height="50%"></video>
需要用户那边去调整一下，可参考文档：[https://juejin.cn/post/7132722849457897509](https://juejin.cn/post/7132722849457897509)

## 签名验证失败

显示”签名验证失败，非法调用接口“怎么处理？
第一步先跟客户确定 `API_Token` 和 `project_id` 是否正确填入，API_Token 的获取看下[API_Token 文档](https://help.salesmartly.com/docs/apitoken#80261e99a11d3c0408d39faf8b96cc79)`project_id` 就是系统左下角的加密的项目 id

跟客户确认这两个没问题后，确认下加密字符串的拼接是否正确，可以先询问客户拿取 CURL 命令和 API_Token 到[Admin 后台](https://ss888.xmp.one/admin.html#/admin/signature_tool/index.html?spm=m-67-143-150)使用签名工具校验

## [user_id](https://help.salesmartly.com/docs/707UF1#2.1%20%E8%AE%BE%E7%BD%AE%E7%99%BB%E5%BD%95%E4%BF%A1%E6%81%AF) 长度有限制吗？

::: details 设置登录信息

```js
ssq.push('setLoginInfo', {
  user_id: 'b58e64cfxs2ym', // 加密后的用户id, 必填！
  user_name: 'test_yy', // 对应用户名，可在客户资料查看
  language: 'ru-RU', // 对应用户语言，可在客户资料查看
  phone: '1592014xxxx', // 对应用户手机号，可在客户资料查看
  email: 'test@test', // 对应用户邮箱，可在客户资料查看
  description: '套餐B\n客户端\n收费客户', // 对应用户的描述信息，例如套餐信息，可在客户资料查看
  label_names: ['标签值1', '标签值2'], // 对应用户标签，仅支持传系统已创建的标签值，可在客户资料查看
})
```

:::
没有，但是也不要弄太长
