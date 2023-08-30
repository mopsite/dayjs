# 安装

Day.js 可以运行在浏览器和 Node.js 中。本文档所有代码都可以在这两种环境中正常运行，所有单元测试也都在这两个环境下完成。

打开你的浏览器控制台，即可输入测试示例代码。

## Node.js

要在你的 Node.js 项目中使用 Day.js，只需要使用 npm 安装：

```sh
npm install dayjs
```

然后在项目代码中引入即可：

::: code-group

```js [代码]
const dayjs = require('dayjs')
dayjs().format()
```

```[输出]
2023-08-10T23:33:29+08:00
```

:::

## 浏览器

- 本地

  ```html
  <script src="path/to/dayjs/dayjs.min.js"></script>
  <script>
    dayjs().format()
  </script>
  ```

- CDN

  Day.js 同步更新在 [cdnjs](https://cdnjs.com/libraries/dayjs)、[unpkg](https://unpkg.com/dayjs@1.11.9/dayjs.min.js) 和 [jsDelivr](https://www.jsdelivr.com/package/npm/dayjs) 等 CDN 上。

  ```html
  <script src="https://unpkg.com/dayjs@1.11.9/dayjs.min.js"></script>
  <script>
    dayjs().format()
  </script>
  ```

## TypeScript

在 npm 包中已经包含 Day.js 的 TypeScript 类型定义文件。如果你的 `tsconfig.json` 包含以下配置，你必须使用 `import dayjs from 'dayjs'` 的 default import 模式：

```json
"compilerOptions": {
  "esModleInterop": true,
  "allowSyntheticDefaultImports": true
}
```

如果你没有上述配置，default import 将无法正常工作，需要使用 `import * as dayjs from 'dayjs'`。在使用本地化语言和插件时，首先需要导入它们：

```js
import * as dayjs from 'dayjs'
import * as isLeapYear from 'dayjs/plugin/isLeapYear' // 导入插件
import 'dayjs/locale/zh-cn' // 导入本地化语言

dayjs.extend(isLeapYear) // 使用插件
dayjs.locale('zh-cn') // 使用本地化语言
```
