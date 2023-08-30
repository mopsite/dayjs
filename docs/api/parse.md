# 解析

Day.js 并没有对原生 `Date.prototype` 做任何修改，而是给 Date 对象做了一层封装。使用支持的数据格式调用 `dayjs()` 即可取到这个封装的对象。

Day.js 对象是不可变的，所有的 API 操作都将返回一个全新的实例。

## 当前时间

直接调用 `dayjs()` 将返回一个包含当前日期和时间的 Day.js 对象。

```js
var now = dayjs()
```

等同于 `dayjs(new Date())` 的调用。

当没有传入参数时，参数默认是 `undefined`，所以调用 `dayjs(undefined)` 就相当于调用 `dayjs()`。Day.js 将 `dayjs(null)` 视为无效的输入。

## 字符串

解析传入的 ISO 8601 格式的字符串，并返回一个 Day.js 对象实例。

```js
dayjs('2018-04-04T16:00:00.000Z')
```

::: warning 提示
为了保证结果一致，当解析除了 ISO 8601 格式以外的字符串时，你应该使用 String + Format。
:::

## 字符串 + 格式

如果知道输入字符串的格式，你可以用它来解析日期。

::: warning 提示
使用本功能需先配置 [CustomParseFormat](../plugin/#customparseformat) 插件，才能正常运行。
:::

```js
import customParseFormat from 'dayjs/plugin/customParseFormat'
dayjs.extend(customParseFormat)
dayjs('12-25-1995', 'MM-DD-YYYY')
```

如果想解析包含本地化语言的日期字符串，可以传入第三个参数。

```js
import 'dayjs/locale/zh-cn'
dayjs('2018 三月 15', 'YYYY MMMM DD', 'zh-cn')
```

最后一个参数可传入布尔值来启用严格解析模式。严格解析要求格式和输入内容完全匹配，包括分隔符。

```js
dayjs('1970-00-00', 'YYYY-MM-DD').isValid() // true
dayjs('1970-00-00', 'YYYY-MM-DD', true).isValid() // false
dayjs('1970-01-01', 'YYYY-MM-DD', true).isValid() // true
```

如果你不知道输入字符串的确切格式，但知道它可能是几种中的一种，可以使用数组传入多个格式。

```js
dayjs('12-25-2001', ['YYYY', 'YYYY-MM-DD'], 'es', true)
```

### 支持的解析占位符列表

| 输入 | 例子               | 详情                    |
| ---- | ------------------ | ----------------------- |
| YY   | 01                 | 两位数的年份            |
| YYYY | 2001               | 四位数的年份            |
| M    | 1 - 12             | 月份，从 1 开始         |
| MM   | 01 - 12            | 月份，两位数            |
| MMM  | Jan - Dec          | 缩写的月份名称          |
| MMMM | January - December | 完整的月份名称          |
| D    | 1 - 31             | 月份里的一天            |
| DD   | 1 - 31             | 月份里的一天，两位数    |
| H    | 0 - 23             | 小时                    |
| HH   | 00 - 23            | 小时，两位数            |
| h    | 1 - 12             | 小时，12 小时制         |
| hh   | 01 - 12            | 小时，12 小时制，两位数 |
| m    | 0 - 59             | 分钟                    |
| mm   | 00 - 59            | 分钟，两位数            |
| s    | 0 - 59             | 秒                      |
| ss   | 00 - 59            | 秒，两位数              |
| S    | 0 - 9              | 毫秒，一位数            |
| SS   | 00 - 09            | 毫秒，两位数            |
| SSS  | 000 - 999          | 毫秒，三位数            |
| Z    | -5:00              | UTC 的偏移量            |
| ZZ   | -0500              | UTC 的偏移量，两位数    |
| A    | AM/PM              | 上午/下午，大写         |
| a    | am/pm              | 上午/下午，小写         |
| Do   | 1st - 31st         | 带序数词的月份里的一天  |
| X    | 1410715640.579     | Unix 时间戳，秒         |
| x    | 1410715640579      | Unix 时间戳，毫秒       |

## Unix 时间戳

### 毫秒

解析传入的一个 Unix 时间戳（13 位数字，从 1970 年 1 月 1 日 UTC 午夜开始所经过的毫秒数），并返回一个 Day.js 对象。

```js
dayjs(1318781876406)
```

::: danger 注意
传入的参数必须是 number。
:::

### 秒

解析传入的一个 Unix 时间戳（10 位数字，从 1970 年 1 月 1 日 UTC 午夜开始所经过的秒数），并返回一个 Day.js 对象。

```js
dayjs.unix(1318781876)
```

这个方法是用 `dayjs(timestamp * 1000)` 实现的，所以传入时间戳里的小数点后面的秒也会被解析。

```js
dayjs.unix(1318781876406.721)
```

## Date 对象

使用原生 JavaScript Date 对象创建一个 Day.js 对象。

```js
var d = new Date(2018, 8, 18)
var day = dayjs(d)
```

这将克隆 Date 对象。对传入的 Date 对象做进一步更改不会影响 Day.js 对象，反之亦然。

## 对象

你可以传入包含单位和数值的一个对象来创建 Day.js 对象。

::: warning 注意
使用本功能需先配置 [ObjectSupport](../plugin/#objectsupport) 插件，才能正常运行。
:::

```js
import objectSupport from 'dayjs/plugin/objectSupport'
dayjs.extend(objectSupport)

dayjs({ hour: 15, minute: 10 })
dayjs.utc({ y: 2010, M: 3, d: 5, h: 15, m: 10, s: 3, ms: 123 })
dayjs({ year: 2010, month: 3, day: 5, hour: 15, minute: 10, second: 3, millisecond: 123 })
dayjs({ years: 2010, months: 3, date: 5, hours: 15, minutes: 10, seconds: 3, milliseconds: 123 })
```

`day` 和 `date` 都表示月份里的日期。`dayjs({})` 返回当前时间。

::: danger 注意
类似 `new Date(year, month, date)`，月份从 0 开始计算。
:::

## 数组

你可以传入一个数组来创建一个 Day.js 对象，数组的结构和 `new Date()` 十分类似。

::: warning 注意
使用本功能需先配置 [ArraySupport](../plugin/#arraysupport) 插件，才能正常运行。
:::

```js
import objectSupport from 'dayjs/plugin/arraySupport'
dayjs.extend(arraySupport)

dayjs([2010, 1, 14, 15, 25, 50, 125])
dayjs.utc([2010, 1, 14, 15, 25, 50, 125])
dayjs([2010])
dayjs([2010, 6])
dayjs([2010, 6, 10])
```

`dayjs([])` 返回当前时间。

## UTC

默认情况下，Day.js 会把时间解析成本地时间。如果想使用 UTC 时间，你可以调用 `dayjs.utc()`。

在 UTC 模式下，所有显示方法将会显示 UTC 时间而非本地时间。

::: warning 注意
使用本功能需先配置 [UTC](../plugin/#utc) 插件，才能正常运行。
:::

```js
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

dayjs.utc().format() // => 2023-08-11T04:02:55Z
```

此外，在 UTC 模式下，所有 getters 和 setters 将使用 `Date#getUTC*` 和 `Date#setUTC*` 方法，而不是 `Date#get*` 和 `Date#set*` 方法。

```js
dayjs.utc().seconds(30).valueOf()  // => new Date().setUTCSeconds(30)
dayjs.utc().seconds()              // => new Date().getUTCSeconds()
```

要在本地时间和 UTC 时间之间切换，你可以使用 `dayjs#utc` 或 `dayjs#local`。

## Dayjs 复制

所有的 Day.js 对象都是**不可变的**。但如果有必要，使用 `dayjs#clone` 可以复制出一个当前对象。

```js
var a = dayjs()
var b = a.clone()
// a 和 b 是两个独立的 Day.js 对象
```

在 `dayjs()` 里传入一个 Day.js 对象也会返回一个复制的对象。

```js
var a = dayjs()
var b = dayjs(a)
```

## 验证

`isValid()` 方法返回一个布尔值，表示 Day.js 的日期是否通过校验。

- 不严格的校验

  只检查传入的值能否被解析成一个时间日期。

  ```js
  dayjs('2022-01-33').isValid()           // true，解析成 2022-02-02
  dayjs('some invalid string').isValid()  // fasle
  ```

- 严格校验

  检查传入的值能否被解析，且是否是一个有意义的日期。最后两个参数 format 和 strict 必须提供。

  ::: warning 注意
  使用本功能需先配置 [CustomParseFormat](../plugin/#customparseformat) 插件，才能正常运行。
  :::

  ```js
  dayjs('2022-02-31', 'YYYY-MM-DD', true).isValid()  // false
  ```
