# 操作

你可能需要一些方法来操作 Day.js 对象。Day.js 支持像这样的链式调用：

```js
dayjs('2019-01-25').add(1, 'day').subtract(1, 'year').year(2009).toString()

// => Sun, 25 Jan 2009 16:00:00 GMT
```

## add()

返回增加一定时间的复制的 Day.js 对象。

```js
dayjs().add(7, 'day')
```

各个传入的单位对大小写不敏感，支持缩写（区分大小写）和复数。

或者，也可以给 Day.js 对象增加一个持续时间。

```js
dayjs().add(dayjs.duration({ days: 1 }))
```

## subtract()

返回减去一定时间的复制的 Day.js 对象。

```js
dayjs().subtract(7, 'year')
```

`add()` 和 `subtract()` 支持的单位列表：

| 单位        | 缩写 | 详情                              |
| ----------- | ---- | --------------------------------- |
| day         | d    | 日                                |
| week        | w    | 周                                |
| month       | M    | 月                                |
| quarter     | Q    | 季度（依赖 `QuarterOfYear` 插件） |
| year        | y    | 年                                |
| hour        | h    | 小时                              |
| minute      | m    | 分钟                              |
| second      | s    | 秒                                |
| millisecond | ms   | 毫秒                              |

## startOf()

返回复制的 Day.js 对象，并设置到一个时间的开始。

```js
dayjs().startOf('year')
```

各个传入的单位对大小写不敏感，支持缩写（区分大小写）和复数。

## endOf()

返回复制的 Day.js 对象，并设置到一个时间的末尾。

```js
dayjs().endOf('year')
```

`startOf` 和 `endOf` 支持的单位列表：

|单位|缩写|详情|
|---|---|---|
|year|y|今年一月 1 日上午 00:00|
|quarter|Q|本季度第一个月 1 日上午 00:00（依赖 QuarterOfYear 插件）|
|month|M|本月 1 日上午 00:00|
|week|w|本周的第一天上午 00:00（取决于国际化设置）|
|isoWeek||本周的第一天上午 00:00（根据 ISO 8601，依赖 IsoWeek 插件）|
|date|D|当天 00:00|
|day|d|当天 00:00|
|hour|h|当前时间，0 分、0 秒、0 毫秒|
|minute|m|当前时间，0 秒、0 毫秒|
|second|s|当前时间，0 毫秒|

## local()

返回一个在当前时区模式下的 Day.js 对象。

::: warning 注意
使用本功能需先配置 [UTC](../plugin/#utc) 插件，才能正常运行。
:::

```js
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

dayjs().utc().local().format()
```

## utc()

返回一个在 UTC 模式下的 Day.js 对象。

::: warning 注意
使用本功能需先配置 [UTC](../plugin/#utc) 插件，才能正常运行。
:::

```js
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

dayjs().utc().local().format()
```

传入 true 将只改变 UTC 模式而不改变本地时间。

```js
dayjs('2016-05-03 22:15:01').utc(true).format()
```

## utcOffset()

获取 UTC 偏移量（分钟）。

::: warning 注意
使用本功能需先配置 [UTC](../plugin/#utc) 插件，才能正常运行。
:::

```js
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

dayjs().utcOffset()
```

也可以传入分钟来得到一个更改 UTC 偏移量的新实例。

```js
dayjs().utcOffset(120)
```

::: danger 注意
一旦你设置了 UTC 偏移量，它将保持固定，不会自动改变（即没有 DST 夏令时变更）。
:::

如果输入在 -16 到 16 之间，会将你的输入理解为小时数而非分钟。

```js
dayjs().utcOffset(8)    // 设置小时偏移量
dayjs().utcOffset(480)  // 设置分钟偏移量
```

第二个参数传入 true 可以只改变偏移量而保持本地时间不变。

```js
dayjs.utc('2000-01-01T06:01:02Z').utcOffset(1, true).format()
```
