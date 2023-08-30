# 时长

Day.js 有表示时间长度的对象。将 Day.js 对象定义为单个时间点，将 duration 定义为时间的长度。

时长没有定义的开始和结束日期，它们是无上下文的。

从概念上将，时长比“今天下午 2 点到 4 点之间”更类似于“2 小时”。因此，在依赖上下文的时间单位之间的转换中，时长并不是一个合适的选择。

例如，一年可以定义为 366 天、365 天、365.25 天、12 个月、52 周。没有上下文，视图将年转换为天是毫无意义的。与使用 Durations 相比，使用 `dayjs#diff` 计算两个时刻之间的天数或年数要好得多。

::: warning 注意
这依赖 [Duration](./#duration) 插件，才能正常运行。
:::

```js
dayjs.extend(duration)

dayjs.duration({ months: 12 })
```

## Creating

要创建时长，则调用 `dayjs.duration()`，并以毫秒为单位。

::: warning 注意
这依赖 [Duration](./#duration) 插件，才能正常运行。
:::

```js
dayjs.extend(duration)

dayjs.duration(100) // 100 milliseconds
```

如果要使用毫秒以外的其他度量单位来创建时长对象，则也可以传入度量单位。

```js
dayjs.duration(2, 'days')
```

### 支持的单位列表：

| 单位         | 缩写 |
| ------------ | ---- |
| days         | d    |
| weeks        | w    |
| months       | M    |
| years        | y    |
| hours        | h    |
| minutes      | m    |
| seconds      | s    |
| milliseconds | ms   |

如果需要同时传入多个不同的度量单位，则可以传入值的对象。

```js
dayjs.duration({
  seconds: 2,
  minutes: 2,
  hours: 2,
  days: 2,
  weeks: 2,
  months: 2,
  years: 2
})
```

Day.js 也支持解析 ISO 8601 时长格式。

```js
dayjs.duration('P1Y2M3DT4H5M6S')
dayjs.duration('P1M')
```

## Clone

复制一个时长对象。时长是不可变的，就像 Day.js 对象一样。当然，这可以用来保存在某个时间点的快照。

```js
dayjs.duration().clone()
```

## Humanize

当仅仅是想显示一段时长，要得到类似 `dayjs#from` 的结果，但又不想创建两个 Day.js 对象时。

::: warning 注意
这依赖 [Duration](./#duration) 和 [RelativeTime](./#relativetime) 插件，才能正常运行。
:::

```js
dayjs.extend(duration)
dayjs.extend(relativeTime)
dayjs.duration(1, 'minutes').humanize() // a minute
dayjs.duration(2, 'minutes').humanize() // 2 minutes
dayjs.duration(24, 'hours').humanize() // a day
```

默认情况下，返回的字符串是没有后缀的。如果需要后缀，则按如下所示传入 true。

```js
dayjs.duration(1, 'minutes').humanize(true) // in a minute
```

对于当前时间之前的后缀，则传入负数。

```js
dayjs.duration(-1, 'minutes').humanize(true) // a minute ago
```

## Format

根据传入的占位符返回格式化后的时长。将字符放在方括号中，即可原样返回而不被格式化替换（例如 `[MM]`）。

```js
dayjs
  .duration({
    seconds: 1,
    minutes: 2,
    hours: 3,
    days: 4,
    months: 6,
    years: 7
  })
  .format('YYYY-MM-DDTHH:mm:ss') // 0007-06-04T03:02:01
```

支持的格式化占位符列表：

| 格式 | 输出      | 详情            |
| ---- | --------- | --------------- |
| Y    | 18        | 年              |
| YY   | 18        | 年，两位数      |
| YYYY | 2018      | 年，四位数      |
| M    | 1 - 12    | 月份，从 1 开始 |
| MM   | 01 - 12   | 月份，两位数    |
| D    | 1 - 31    | 日              |
| DD   | 01 - 31   | 日，两位数      |
| H    | 0 - 23    | 小时            |
| HH   | 00 - 23   | 小时，两位数    |
| m    | 0 - 59    | 分钟            |
| mm   | 00 - 59   | 分钟，两位数    |
| s    | 0 - 59    | 秒              |
| ss   | 00 - 59   | 秒，两位数      |
| SSS  | 000 - 999 | 毫秒，三位数    |

## Milliseconds

要获取时长的毫秒数，请使用 `dayjs.duration().milliseconds()`。它将返回 0 到 999 之间的数字。

```js
dayjs.duration(500).milliseconds(); // 500
dayjs.duration(1500).milliseconds(); // 500
dayjs.duration(15000).milliseconds(); /0
```

如果想得到以毫秒为单位的时长，则该用 `dayjs.duration().asMilliseconds()`。

```js
dayjs.duration(500).asMilliseconds() // 500
dayjs.duration(1500).asMilliseconds() // 1500
dayjs.duration(15000).asMilliseconds() // 15000
```

## Seconds

要获取时长的毫秒数，请使用 `dayjs.duration().seconds()`。它将返回 0 到 59 之间的数字。

```js
dayjs.duration(500).seconds() // 0
dayjs.duration(1500).seconds() // 1
dayjs.duration(15000).seconds() // 15
```

如果想得到以秒为单位的时长，则该用 `dayjs.duration().asSeconds()`。

## Minutes

和其他类似 getters 类似，`dayjs.duration().minutes()` 用来获取时长的分钟部分（0 - 59）。

```js
dayjs.duration().minutes()
dayjs.duration().asMinutes()
```

`dayjs.duration().asMinutes()` 获取以分钟为单位的时长。

## Hours

和其他类似 getters 类似，`dayjs.duration().hours()` 用来获取时长的小时部分（0 - 23）。

```js
dayjs.duration().hours()
dayjs.duration().asHours()
```

`dayjs.duration().asHours()` 获取以小时为单位的时长。

## Days

和其他类似 getters 类似，`dayjs.duration().days()` 用来获取时长的天部分（0 - 30）。

```js
dayjs.duration().days()
dayjs.duration().asDays()
```

`dayjs.duration().asDays()` 获取以天为单位的时长。

## Weeks

和其他类似 getters 类似，`dayjs.duration().weeks()` 用来获取时长的周部分（0 - 4）。

```js
dayjs.duration().weeks()
dayjs.duration().asWeeks()
```

`dayjs.duration().asWeeks()` 获取以周为单位的时长。

与时长的其他 getters 不同，周数是作为天数的子集，且不会从天数中扣除。

注意：以周为单位的时长定义为 7 天。

## Months

和其他类似 getters 类似，`dayjs.duration().months()` 用来获取时长的月份部分（0 - 11）。

```js
dayjs.duration().months()
dayjs.duration().asMonths()
```

`dayjs.duration().asMonths()` 获取以月份为单位的时长。

## Years

和其他类似 getters 类似，`dayjs.duration().years()` 用来获取时长的年部分。

```js
dayjs.duration().years()
dayjs.duration().asYears()
```

`dayjs.duration().asYears()` 获取以年为单位的时长。

## Add Time

返回增加一定时间的复制的时长对象。

```js
var a = dayjs.duration(1, 'd')
var b = dayjs.duration(2, 'd')

a.add(b).days() // 3
a.add({ days: 2 }).days()
a.add(2, 'days')
```

[支持的单位列表](#支持的单位列表)

## Subtract Time

返回减去一定时间的复制的时长对象。

```js
var a = dayjs.duration(3, 'd')
var b = dayjs.duration(2, 'd')

a.subtract(b).days() // 1
a.subtract({ days: 2 }).days()
a.subtract(2, 'days')
```

[支持的单位列表](#支持的单位列表)

## Using Duration with Diff

可以将时长与 `dayjs#diff` 一起使用，以获取两个时刻之间的时长。为此，只需将 `dayjs#diff` 方法传给 `dayjs#duration`，如下所示：

```js
var x = dayjs()
var y = dayjs()

var duration = dayjs.duration(x.diff(y))
// 返回时长对象，其时长在 x 和 y 之间。
```

查看[这里](../api/display#diff)了解更多关于 `dayjs#diff` 的信息。

## As Unit of Time

作为 `Duration#asX` 的替代，可以使用 `Duration#as('x')`。

```js
var duration = dayjs.duration()

duration.as('hours')
duration.as('minutes')
duration.as('seconds')
duration.as('milliseconds')
```

[支持的单位列表](#支持的单位列表)

## Get Unit of Time

作为 `Duration#x()` 获取器的替代，可以使用 `Duration#get('x')`。

```js
var duration = dayjs.duration

duration.get('hours')
duration.get('minutes')
duration.get('seconds')
duration.get('milliseconds')
```

[支持的单位列表](#支持的单位列表)

## As JSON

当将时长对象序列化为 JSON 时，它将会表示为 ISO 8601 字符串。

```js
JSON.stringify({
  postDuration: dayjs.duration(5, 'm')
}) // '{"postDuration":"PT5M"}'
```

## Is a Duration

要检查变量是否为 Day.js 时长对象，请使用 `dayjs.isDuration()`。

```js
dayjs.isDuration() // false
dayjs.isDuration(new Date()) // false
dayjs.isDuration(dayjs()) // false
dayjs.isDuration(dayjs.duration()) // true
dayjs.isDuration(dayjs.duration(2, 'minutes')) // true
```

## As ISO 8601 String

返回 ISO 8601 标准指定的字符串形式的时长。

```js
dayjs.duration(1, 'd').toISOString() // "P1D"
```

格式 `PnYnMnDTnHnMnS` 的说明：

| 单位 | 含义                                 |
| ---- | ------------------------------------ |
| P    | P 代表周期。放置在时长表示的开始处。 |
| Y    | 年                                   |
| M    | 月                                   |
| D    | 日                                   |
| T    | 在时间分量之前的指示符。             |
| H    | 小时                                 |
| M    | 分钟                                 |
| S    | 秒钟                                 |

## Locale

你可以使用 `locale` 获取或设置时长的国际化。本地化会影响一些方法输出的字符串内容，例如 `humanize()`。更多关于国际化的信息，请参阅 [i18n](../i18n/) 部分。

::: warning 注意
这依赖 [RelativeTime](./#relativetime) 插件，才能正常运行。
:::

```js
require('dayjs/locale/es')

dayjs.duration(1, 'minutes').locale('en').humanize() // a minute
dayjs.duration(1, 'minutes').locale('es').humanize() // un minuto
```
