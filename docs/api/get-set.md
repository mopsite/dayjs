# 取值/赋值

在设计上，Day.js 的 getter 和 setter 使用了相同的 API，也就是说，不传参数调用方法即为 getter，调用并传入参数为 setter。

这些 API 调用了对应原生 Date 对象的方法。

```js
dayjs().second() // new Date().getSeconds()
dayjs().second(30).valueOf() // new Date().setSeconds(30)
```

如果你处于 UTC 模式，将会掉你应该对应的 UTC 方法。

```js
dayjs.utc().seconds() // => new Date().getUTCSeconds()
dayjs.utc().seconds(30).valueOf() // => new Date().setUTCSeconds(30)
```

## millisecond()

获取或设置毫秒。

传入 0 到 999 的数字。如果超出这个范围，它会进位到秒。

```js
dayjs().millisecond()
dayjs().millisecond(1)
```

## second()

获取或设置秒。

传入 0 到 59 的数字。如果超出这个范围，它会进位到分钟。

```js
dayjs().second()
dayjs().second(1)
```

## minute()

获取或设置分钟。

传入 0 到 59 的数字。如果超出这个范围，它会进位到小时。

```js
dayjs().minute()
dayjs().minute(59)
```

## hour()

获取或设置小时。

传入 0 到 23 的数字。如果超出这个范围，它会进位到天数。

```js
dayjs().hour()
dayjs().hour(12)
```

## date()

获取或设置月份里的日期。

传入 1 到 31 的数字。如果超出这个范围，它会进位到月份。

```js
dayjs().date()
dayjs().date(1)
```

## day()

获取或设置星期几。

传入 0（星期天） 到 6（星期六） 的数字。如果超出这个范围，它会进位到下一周。

```js
dayjs().day()
dayjs().day(0)
```

## weekday()

根据本地化配置获取或设置星期几。

::: warning 注意
使用本功能需先配置 [Weekday](../plugin/#weekday) 插件，才能正常运行。
:::

如果本地化配置了星期天为一周的第一天，`dayjs.weekday(0)` 将返回星期天。如果星期一是一周的第一天，`dayjs.weekday(0)` 将返回星期一。

```js
import weekday from 'dayjs/plugin/weekday'
dayjs.extend(weekday)

// 当星期天是一周的第一天
dayjs().weekday(-7)  // 上周日
dayjs().weekday(7)   // 下周日

// 当星期一是一周的第一天
dayjs().weekday(-7)  // 上周一
dayjs().weekday(7)   // 下周一
```

## isoWeekday()

获取或设置 ISO 星期几，其中 1 是星期一，7 是星期日。

::: warning 注意
使用本功能需先配置 [IsoWeek](../plugin/#isoweek) 插件，才能正常运行。
:::

```js
import isoWeek from 'dayjs/plugin/isoWeek'
dayjs.extend(isoWeek)

dayjs().isoWeekday()
dayjs().isoWeekday(1)  // 星期一
```

## dayOfYear()

获取或设置年份里的第几天。

传入 1 到 366 的数字。如果超出这个范围，它会进位到下一年。

::: warning 注意
使用本功能需先配置 [DayOfYear](../plugin/#dayofyear) 插件，才能正常运行。
:::

```js
import dayOfYear from 'dayjs/plugin/dayOfYear'
dayjs.extend(dayOfYear)

dayjs('2010-01-01').dayOfYear()     // 1
dayjs('2010-01-01').dayOfYear(356)  // 2010-12-31
```

## weekOfYear()

获取或设置该年的第几周。

::: warning 注意
使用本功能需先配置 [WeekOfYear](../plugin/#weekofyear) 插件，才能正常运行。
:::

```js
import weekOfYear from 'dayjs/plugin/weekOfYear'
dayjs.extend(weekOfYear)

dayjs('2018-06-27').week()   // 26
dayjs('2018-06-27').week(5)  // 设置周
```

## isoWeek()

获取或设置该年的 ISO 星期。

::: warning 注意
使用本功能需先配置 [IsoWeek](../plugin/#isoweek) 插件，才能正常运行。
:::

```js
import isoWeek from 'dayjs/plugin/isoWeek'
dayjs.extend(isoWeek)

dayjs().isoWeek()
dayjs().isoWeek(2)
```

## month()

获取或设置月份。

传入 0 到 11 的数字（月份是从 0 开始计算）。如果超出这个范围，会进位到年份。

```js
dayjs().month()
dayjs().month(0)
```

## quarter()

获取或设置季度。

::: warning 注意
使用本功能需先配置 [QuarterOfYear](../plugin/#quarterofyear) 插件，才能正常运行。
:::

```js
import quarterOfYear from 'dayjs/plugin/quarterOfYear'
dayjs.extend(quarterOfYear)

dayjs('2010-04-01').quarter()
dayjs('2010-04-01').quarter(2)
```

## year()

获取或设置年份。

```js
dayjs().year()
dayjs().year(2000)
```

## weekYear()

获取基于当前语言配置的按周计算的年份。

::: warning 注意
使用本功能需先配置 [WeekYear](../plugin/#weekyear) 插件，才能正常运行。该插件依赖于 [weekOfYear](../plugin/#weekofyear) 插件。
:::

```js
import weekOfYear from 'dayjs/plugin/weekOfYear'
import weekYear from 'dayjs/plugin/weekYear'
dayjs.extend(weekOfYear)
dayjs.extend(weekYear)

dayjs().weekYear()
```

## isoWeekYear()

获取 [ISO 周年](https://en.wikipedia.org/wiki/ISO_week_date)。

::: warning 注意
使用本功能需先配置 [IsoWeek](../plugin/#isoweek) 插件，才能正常运行。
:::

```js
import isoWeek from 'dayjs/plugin/isoWeek'
dayjs.extend(isoWeek)

dayjs().isoWeekYear()
```

## isoWeeksInYear()

获取当前年份的周数，根据 [ISO weeks](https://en.wikipedia.org/wiki/ISO_week_date) 的定义。

::: warning 注意
使用本功能需先配置 [IsoWeeksInYear](../plugin/#isoweeksinyear) 插件，才能正常运行。该插件依赖于 [isLeapYear](../plugin/#isleapyear) 插件。
:::

```js
import isLeapYear from 'dayjs/plugin/isLeapYear'
import isoWeeksInYear from 'dayjs/plugin/isoWeeksInYear'
dayjs.extend(isLeapYear)
dayjs.extend(isoWeeksInYear)

dayjs('2004-01-01').isoWeeksInYear()  // 53
dayjs('2005-01-01').isoWeeksInYear()  // 52
```

## get()

从 Day.js 对象中获取相应信息的 getter。可以理解为：

```js
dayjs().get(unit) === dayjs().unit()
```

各个传入的单位对大小写不敏感，支持缩写（区分大小写）和复数。

```js
dayjs().get('year')  // => dayjs().year()
dayjs().get('month')
dayjs().get('date')
dayjs().get('hour')
dayjs().get('minute')
dayjs().get('second')
dayjs().get('millisecond')
```

### 支持的单位列表

|单位|缩写|详情|
|---|---|---|
|date|D|月份里的日期|
|day|d|星期几（星期天 0，星期六 6）|
|month|M|月份（一月 0，十二月 11）|
|year|y|年份|
|hour|h|小时|
|minute|m|分钟|
|second|s|秒|
|millisecond|ms|毫秒|

## set()

通用的 setter，调用后会返回一个修改后的新实例。可以理解为：

```js
dayjs().set(unit, value) === dayjs().unit(value)
```

两个参数分别是要更新的单位和数值。

```js
dayjs().set('date', 1) // => dayjs().date(1)
dayjs().set('month', 3)
dayjs().set('second', 30)
```

有支持这样的链式调用：

```js
dayjs().set('hour', 5).set('minute', 55).set('second', 15)
```

支持的单位同 [`get()`](#支持的单位列表)。

## max()

返回传入的 Day.js 实例中的最大的（即最靠近未来的）。它接受传入多个 Day.js 实例或一个数组。

::: warning 注意
使用本功能需先配置 [MinMax](../plugin/#minmax) 插件，才能正常运行。
:::

```js
import minMax from 'dayjs/plugin/minMax'
dayjs.extend(minMax)

dayjs.max(dayjs(), dayjs('2018-01-01'), dayjs('2019-01-01'))
dayjs.max([dayjs(), dayjs('2018-01-01'), dayjs('2019-01-01')])
```

## min()

返回传入的 Day.js 实例中的最小的（即最靠近过去的）。它接受传入多个 Day.js 实例或一个数组。

::: warning 注意
使用本功能需先配置 [MinMax](../plugin/#minmax) 插件，才能正常运行。
:::

```js
import minMax from 'dayjs/plugin/minMax'
dayjs.extend(minMax)

dayjs.min(dayjs(), dayjs('2018-01-01'), dayjs('2019-01-01'))
dayjs.min([dayjs(), dayjs('2018-01-01'), dayjs('2019-01-01')])
```
