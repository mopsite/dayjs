# 加载语言配置

Day.js 完美支持国际化，但除非手动加载，否则多国语言默认是不会被打包到工程里。

你可以加载多个其他语言并自由切换，点击[这里](https://github.com/iamkun/dayjs/tree/dev/src/locale)查看支持的语言列表。我们还在根目录提供了 [locale.json](https://unpkg.com/dayjs@1.11.9/locale.json) 文件，包含所有支持的语言列表。

语言包配置的具体细节以及如何更新或自定义语言都可以查看自定义中的内容。

::: danger 注意
**请按需加载语言文件。**
:::

## Node.js

```js
require('dayjs/locale/zh-cn')
// import 'dayjs/locale/zh-cn'  // ES 2015

dayjs.locale('zh-cn')  // 全局使用
dayjs().locale('zh-cn').format()  // 当前实例使用
```

你还可以加载并获取语言配置对象，方便后面使用。

```js
var locale_de = require('dayjs/locale/de')
// import locale_de from 'dayjs/locale/de'  // ES 2015
```

## 浏览器

```html
<script src="path/to/dayjs/locale/de"></script>
<script>
  dayjs.locale('de')  //全局使用
  dayjs().locale('de').format()  // 当前实例使用
</script>
```

获取语言对象方便后面使用。

```html
<script src="path/to/dayjs/locale/de"></script>
<script>
  var customLocale = window.dayjs_locale_zh_cn
</script>
```

你有可以通过 CDN 引入。

```html
<script src="https://unpkg.com/dayjs@1.11.9/dayjs.min.js"></script>
<script src="https://unpkg.com/dayjs@1.11.9/locale/zh-cn.js"></script>
<script>dayjs.locale('zh-cn')</script>
```
