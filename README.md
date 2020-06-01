# js-handle

## 发布命令

npm publish --access=public --registry http://registry.npmjs.org

## 通用工具类

### 将数组数据转成 tree 结构数据

`until.arrayToTree`

## 将 base64 转成 Unit8 数组

`base64Library.toUint8Array`

## 将 Unit8 数组转成 Base64 字符串

`arrayBufferLibrary.toBase64`

## 验证 validate

### 验证手机号码

`validate.phone`

### 验证银行卡

`validate.cardNo`

### 固定电话

`validate.fixedPhone`

### 验证身份证

`validate.idCard`

### 验证电子邮箱

`validate.email`

### 验证 IP 地址

0:仅验证 IPV4
1:仅验证 IPV6
2:IPV4 或 IPV6

`validate.ip`

### 验证 MAC 地址

`validate.mac`
