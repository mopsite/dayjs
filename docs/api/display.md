# 显示

当解析和操作完成之后，你需要一些方式来展示 Day.js 对象。

## format()

根据传入的占位符返回格式化（ISO 8601）后的日期。

将字符放在方括号中，即可原样返回而不被格式化替换（例如，`[MM]`）。

```js
dayjs().format()
// => 2023-08-11T17:05:29+08:00

dayjs('2019-01-25').format('[YYYYescape] YYYY-MM-DDTHH:mm:ssZ[Z]')
// => YYYYescape 2019-01-25T00:00:00+08:00Z

dayjs('2019-01-25').format('DD/MM/YYYY')
// => 25/01/2019
```

**支持的格式化占位符列表：**

| 输入 | 例子               | 详情                     |
| ---- | ------------------ | ------------------------ |
| YY   | 01                 | 两位数的年份             |
| YYYY | 2001               | 四位数的年份             |
| M    | 1 - 12             | 月份，从 1 开始          |
| MM   | 01 - 12            | 月份，两位数             |
| MMM  | Jan - Dec          | 缩写的月份名称           |
| MMMM | January - December | 完整的月份名称           |
| D    | 1 - 31             | 月份里的一天             |
| DD   | 1 - 31             | 月份里的一天，两位数     |
| d    | 0 - 6              | 一周中的一天，星期天是 0 |
| dd   | Su - Sa            | 最简写的星期几           |
| ddd  | Sun - Sat          | 简写的星期几             |
| dddd | Sunday - Saturday  | 星期几                   |
| H    | 0 - 23             | 小时                     |
| HH   | 00 - 23            | 小时，两位数             |
| h    | 1 - 12             | 小时，12 小时制          |
| hh   | 01 - 12            | 小时，12 小时制，两位数  |
| m    | 0 - 59             | 分钟                     |
| mm   | 00 - 59            | 分钟，两位数             |
| s    | 0 - 59             | 秒                       |
| ss   | 00 - 59            | 秒，两位数               |
| SSS  | 000 - 999          | 毫秒，三位数             |
| Z    | -5:00              | UTC 的偏移量             |
| ZZ   | -0500              | UTC 的偏移量，两位数     |
| A    | AM/PM              | 上午/下午，大写          |
| a    | am/pm              | 上午/下午，小写          |

更多可用格式，如 Q、Do、k、X、x 等，请使用 AdvancedFormat 插件。

在不同的本地化配置下，有一些不同的本地化格式可以使用。

::: warning 注意
使用本功能需先配置 [LocalizedFormat](../plugin/#localizedformat) 插件，才能正常运行。
:::

```js
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(localizedFormat)

dayjs().format('L LT')
```

**支持的本地化格式列表：**

| 占位符 | 英语语言                  | 示例输出                          |
| ------ | ------------------------- | --------------------------------- |
| LT     | h:mm A                    | 8:02 PM                           |
| LTS    | h:mm:ss A                 | 8:02:18 PM                        |
| L      | MM/DD/YY                  | 08/16/2018                        |
| LL     | MMMM D, yyyy              | August 16, 2018                   |
| LLL    | MMMM D, YYY h:mm A        | August 16, 2018 8:02 PM           |
| LLLL   | dddd, MMMM D, YYYY h:mm A | Thursday, August 16, 2018 8:02 PM |
| I      | M/D/YYYY                  | 8/16/2018                         |
| II     | MMM D, YYYY               | Aug 16, 2018                      |
| III    | MMM D, YYYY h:mm A        | Aug 16, 2018 8:02 PM              |
| IIII   | ddd, MMM D, YYYY h:mm A   | Thu, Aug 16, 2018 8:02 PM         |

## fromNow()

返回现在到当前实例的相对时间。

::: warning 注意
使用本功能需先配置 [RelativeTime](../plugin/#relativetime) 插件，才能正常运行。
:::

```js
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

dayjs('1999-01-01').fromNow() // => 25 years ago
```

如果传入 true，则可以获得不带后缀的值。

```js
dayjs('1999-01-01').fromNow(true) // => 25 years
```

## from()

返回传入实例到当前实例的相对时间。

::: warning 注意
使用本功能需先配置 [RelativeTime](../plugin/#relativetime) 插件，才能正常运行。
:::

```js
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

dayjs('1999-01-01').from(dayjs('2000-01-01')) // 1 年前
```

如果传入 true，则可以获得不带后缀的值。

```js
dayjs('1999-01-01').from(dayjs('2000-01-01'), true) // 1 年
```

## toNow()

返回当前实例到现在的相对时间。

::: warning 注意
使用本功能需先配置 [RelativeTime](../plugin/#relativetime) 插件，才能正常运行。
:::

```js
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

dayjs('1999-01-01').toNow()
```

如果传入 true，则可以获得不带后缀的值。

```js
dayjs('1999-01-01').from(dayjs('2000-01-01'), true)
```

## to()

返回当前实例到传入实例的相对时间。

::: warning 注意
使用本功能需先配置 [RelativeTime](../plugin/#relativetime) 插件，才能正常运行。
:::

```js
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

dayjs('1999-01-01').to(dayjs('2000-01-01')) // 1 年后
```

如果传入 true，则可以获得不带后缀的值。

```js
dayjs('1999-01-01').to(dayjs('2000-01-01'), true)  // 1 年
```

`fromNow()`、`from()`、`toNow()` 和 `to()` 的时间范围划分标准：

| 范围            | 键值 | 示例输出               |
| --------------- | ---- | ---------------------- |
| 0 到 44 秒      | s    | 几秒前                 |
| 45 到 89 秒     | m    | 1 分钟前               |
| 90 秒到 44 分   | mm   | 2 分钟前 ... 44 分钟前 |
| 45 到 89 分     | h    | 1 小时前               |
| 90 分到 21 小时 | hh   | 2 小时前... 21 小时前  |
| 22 到 35 小时   | d    | 1 天前                 |
| 36 小时到 25 天 | dd   | 2 天前 ... 25 天前     |
| 26 到 45 天     | M    | 1 个月前               |
| 46 天到 10 月   | MM   | 2 个月前 ... 10 个月前 |
| 11 月到 17 月   | y    | 1 年前                 |
| 18 月以上       | yy   | 2 年前 ... 20 年前     |

::: warning 提示
上面表格里的值是由语言配置决定的，并且可以自定义输出内容。时间会舍入到最接近的秒数。
:::

## diff()

返回指定单位下两个日期时间之间的差异（默认返回值以毫秒为单位）。

```js
const date1 = dayjs('2019-01-25')
const date2 = dayjs('2018-06-02')

date1.diff(date2) // 20214000000
```

要获取其他单位下的差异，则在第二个参数传入相应的单位。

```js
dayjs('2019-01-25').diff('2018-06-05', 'month') // 7
```

支持的单位列表：

| 单位        | 缩写 | 详情            |
| ----------- | ---- | --------------- |
| day         | d    | 星期几（0 - 6） |
| week        | w    | 第几周          |
| quarter     | Q    | 季度            |
| month       | M    | 月份（0 - 11）  |
| year        | y    | 年              |
| hour        | h    | 小时            |
| minute      | m    | 分              |
| second      | s    | 秒              |
| millisecond | ms   | 毫秒            |

## valueOf()

返回当前实例的 UNIX 时间戳，13 位数字，毫秒。

```js
dayjs('2019-01-25').valueOf()  // 1548381600000
+dayjs(1548381600000)          // 1548381600000
```

## unix()

返回当前实例的 UNIX 时间戳，10 位数，秒。

```js
dayjs('2019-01-25').unix()  // 1548381600
```

## daysInMonth()

获取当前月份包含的天数。

```js
dayjs('2019-01-25').daysInfMonth()  // 31
```

## toDate()

从 Day.js 对象中获取原生的 Date 对象。

```js
dayjs('2019-01-25').toDate()
```

## toArray()

返回一个包含各个时间信息的数组。

::: warning 注意
使用本功能需先配置 [ToArray](../plugin/#toarray) 插件，才能正常运行。
:::

```js
import toArray from 'dayjs/plugin/toArray'
dayjs.extend(toArray)

dayjs('2019-01-25').toArray()  // [ 2019, 0, 25, 0, 0, 0, 0 ]
```

## toJSON()

序列化为 ISO 8601 格式的字符串。

```js
dayjs('2019-01-25').toJSON()  // '2019-01-25T02:00:00.000Z'
```

## toISOString()

返回一个 ISO 8601 格式的字符串。

```js
dayjs('2019-01-25').toISOString()  // '2019-01-25T02:00:00.000Z'
```

## toObject()

返回一个包含各个时间信息的 Object。

::: warning 注意
使用本功能需先配置 [ToObject](../plugin/#toobject) 插件，才能正常运行。
:::

```js
import toObject from 'dayjs/plugin/toObject'
dayjs.extend(toObject)

dayjs('2019-01-25').toObject()
/*
{
  years: 2019,
  months: 0,
  date: 25,
  hours: 0,
  minutes: 0,
  seconds: 0,
  milliseconds: 0
}
*/
```

## toString()

返回包含时间信息的字符串。

```js
dayjs('2019-01-25').toString()  // 'Fri, 25 Jan 2019 02:00:00 GMT'
```
