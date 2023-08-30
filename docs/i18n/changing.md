# 改变语言配置

## 全局

Day.js 默认只内置了 English 语言配置。你可以按需加载其他本地化语言配置：

```js
require('dayjs/locale/zh-cn')
```

当加载了一个语言配置之后，它就是可用的状态了。要改变全局语言配置，只需调用 `dayjs.locale` 并传入一个已经加载的语言配置名称即可。

要改全局的语言配置并不会影响之前存在的实例：

```js
dayjs.locale('zh-cn')
```

## 当前实例

当操作多个 Day.js 实例并想格式化显示为不同语言的文字时，全局的语言配置可能会出现问题。这时，需要使用当前实例的语言配置。

```js
import 'dayjs/locale/de'
dayjs().locale('de').format()
```

::: tip 提示
`dayjs.locale()` 可以返回当前 Day.js 实例的语言配置。
:::
