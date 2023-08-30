# 插件

插件是一些独立的程序，可以给 Day.js 增加新功能和扩展已有功能。默认情况下，Day.js 只包含核心插件，并没有安装任何插件，你可以加载多个插件来满足各类需求。

## 自定义插件

你可以编写自己的 Day.js 插件，插件模板如下：

```js
export default (option, dayjsClass, dayjsFactory) => {
  // extend dayjs()
  // e.g. add dayjs().isSameOrBefore()
  dayjsClass.prototype.isSameOrBefore = function (arguments) {}

  // extend dayjs
  // e.g. add dayjs.utc()
  dayjsFactory.utc = arguments => {}

  // overriding existing API
  // e.g. extend dayjs().format()
  const oldFormat = dayjsClass.prototype.format
  dayjsClass.prototype.format = function (arguments) {
    // original format result
    const result = oldFormat.bind(this)(arguments)
    // return modified result
  }
}
```

## 加载插件

请按需加载插件，加载的方式如下：

::: code-group

```js [Node.js]
var AdvancedFormat = require('dayjs/plugin/advancedFormat')
// import AdvancedFormat from 'dayjs/plugin/advancedFormat' // ES 2015

dayjs.extend(AdvancedFormat) // use plugin
```

```html [浏览器]
<script src="path/to/dayjs/plugin/advancedFormat"></script>
<!-- Load plugin as window.dayjs_plugin_NAME -->
<script>
  dayjs.extend(window.dayjs_plugin_advancedFormat)
</script>
```

:::

## advancedFormat

advancedFormat 插件扩展了 [`dayjs().format`](../api/display#format) API 以支持更多模板。

```js
var advancedFormat = require('dayjs/plugin/advancedFormat')
dayjs.extend(advancedFormat)

dayjs().format('Q Do k kk X x')
```

::: warning 注意
下表中的一些格式选项，如 `z` 和 `zzz` 需要配置额外插件。
:::

| 模板 | 输出                  | 详情                                                 |
| ---- | --------------------- | ---------------------------------------------------- |
| Q    | 1 - 4                 | 季度                                                 |
| Do   | 1st 2nd ... 31st      | 带序数词的月份里的一天                               |
| k    | 1 - 24                | 时：由 1 开始                                        |
| kk   | 01 - 24               | 时：由 1 开始，两位数                                |
| X    | 1360013296            | 秒为单位的 Unix 时间戳                               |
| x    | 1360013296123         | 毫秒单位的 Unix 时间戳                               |
| w    | 1 2 ... 52 53         | 周数（依赖 [weekOfYear](#weekOfYear) 插件）          |
| ww   | 01 02 ... 52 53       | 周数，两位数（依赖 [weekOfYear](#weekOfYear) 插件）  |
| W    | 1 2 ... 52 53         | ISO 周数（依赖 [isoWeek](#weekOfYear) 插件）         |
| WW   | 01 02 ... 52 53       | ISO 周数，两位数（依赖 [isoWeek](#weekOfYear) 插件） |
| wo   | 1st 2nd ... 52nd 53rd | 带序号周数（依赖 [weekOfYear](#weekOfYear) 插件）    |
| gggg | 2017                  | 按周计算的年份（依赖 [weekYear](#weekYear) 插件）    |
| GGGG | 2017                  | ISO 按周计算的年份（依赖 [isoWeek](#isoWeek) 插件）  |
| z    | EST                   | UTC 偏移量的缩写（依赖 [timeZone](#timeZone)）插件   |
| zzz  | Eastern Standard Time | UTC 偏移量的全名（依赖 [timeZone](#timeZone)）插件   |

## arraySupport

arraySupport 插件扩展了 [`dayjs.utc`](../api/manipulate#utc) API 以支持数组参数。

```js
var arraySupport = require('dayjs/plugin/arraySupport')
dayjs.extend(arraySupport)

dayjs([2010, 1, 14, 15, 25, 50, 125])
dayjs.utc([2010, 1, 14, 15, 25, 50, 125])
```

## badMutable

Day.js 被设计成不可变的对象，但是为了方便一些老项目实现对 [moment.js](https://moment.nodejs.cn/) 的替换，可以使用 badMutable 插件让 Day.js 转变成可变的对象。

::: danger 注意
在绝大多数项目中，**不推荐**使用这个插件。
:::

当使用这个插件后，所有的 setter 都会更新当前实例。

```js
var badMutable = require('dayjs/plugin/badMutable')
dayjs.extend(badMutable)
// with 🚨 BadMutable 🚨 plugin
const today = dayjs()
today.add(1, 'day')
console.log(today) // update itself, value will be tomorrow
```

## bigIntSupport

bigIntSupport 插件扩展了 [`dayjs.unix`](../api/parse#unix-时间戳) API 以支持 [BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) 参数。

```js
var bigIntSupport = require('dayjs/plugin/bigIntSupport')
dayjs.extend(bigIntSupport)

dayjs(BigInt(1666310421101))
dayjs.unix(BigInt(1666311003))
```

## buddhistEra

buddhistEra 插件扩展了 [`dayjs().format`](../api/display#format) API 以支持佛历格式化。

佛历是一个年份编号系统，主要用于柬埔寨、老挝、缅甸和泰国等东南亚国家以及斯里兰卡、马来西亚和新加坡的中国人，用于宗教或官方场合。

要计算 BE 年，只需在年份中添加 543。 例如，1977 年 5 月 26 日 AD / CE 应显示为 2520 年 5 月 26 日 BE（1977 + 543）。

```js
var buddhistEra = require('dayjs/plugin/buddhistEra')
dayjs.extend(buddhistEra)

dayjs().format('BBBB BB')
```

扩展的模板列表：

| 模板 | 输出 | 详情                         |
| ---- | ---- | ---------------------------- |
| BBBB | 2561 | 完整佛历年（年份 + 543）     |
| BB   | 61   | 佛历年（年份 + 543），两位数 |

## calendar

calendar 插件增加了一个 `.calendar` API 返回一个 string 来显示日历时间。

```js
var calendar = require('dayjs/plugin/calendar')
dayjs.extend(calendar)

dayjs().calendar(dayjs('2008-01-01'))
dayjs().calendar(null, {
  sameDay: '[Today at] h:mm A', // The same day ( Today at 2:30 AM )
  nextDay: '[Tomorrow at] h:mm A', // The next day ( Tomorrow at 2:30 AM )
  nextWeek: 'dddd [at] h:mm A', // The next week ( Sunday at 2:30 AM )
  lastDay: '[Yesterday at] h:mm A', // The day before ( Yesterday at 2:30 AM )
  lastWeek: '[Last] dddd [at] h:mm A', // Last week ( Last Monday at 2:30 AM )
  sameElse: 'DD/MM/YYYY' // Everything else ( 17/10/2011 )
})
```

## customParseFormat

customParseFormat 插件扩展了 `dayjs()` 支持自定义时间格式。

```js
var customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)

dayjs('05/02/69 1:02:03 PM -05:00', 'MM/DD/YY H:mm:ss A Z')
// Returns an instance containing '1969-05-02T18:02:03.000Z'

dayjs('2018 Enero 15', 'YYYY MMMM DD', 'es')
// Returns an instance containing '2018-01-15T00:00:00.000Z'

dayjs('1970-00-00', 'YYYY-MM-DD', true) // strict parsing
```

[支持的解析占位符列表](../api/parse#字符串-格式)

## dayOfYear

dayOfYear 插件增加了一个 `.dayOfYear()` API 返回一个 number 来表示 Dayjs 的日期是年中第几天，或设置成是年中第几天。

```js
var dayOfYear = require('dayjs/plugin/dayOfYear')
dayjs.extend(dayOfYear)

dayjs('2010-01-01').dayOfYear() // 1
dayjs('2010-01-01').dayOfYear(365) // 2010-12-31
```

## devHelper

devHelper 插件可以在你使用 Day.js 时显示一些提示和警告方便开发。

::: danger 注意
您可以将 `process.env.NODE_ENV` 设置为 `production` 以禁用您的生产环境中的 DevHelper。 如果您启用了像 UglifyJS 这样的 JavaScript 优化工具，它可以自动从生产包中移除此插件来减小打包体积。
:::

```js
var devHelper = require('dayjs/plugin/devHelper')

dayjs.extend(devHelper)
```

你也可以自行实现按需加载此插件：

```js
if (isInDevelopment) {
  // load DevHelper plugin like above
}
```

## duration

duration 插件增加了 `.duration`、`.isDuring` API 来支持时间长度。

```js
var duration = require('dayjs/plugin/duration')
dayjs.extend(duration)

dayjs.duration(100)
```

## isBetween

isBetween 插件增加了 `.isBetween` API 返回一个 boolean 来展示一个时间是否介于两个时间之间。

```js
var isBetween = require('dayjs/plugin/isBetween')
dayjs.extend(isBetween)

// 如果使用年份对比 `year` 则传入第三个参数
dayjs('2010-10-20').isBetween('2010-10-19', dayjs('2010-10-25'), 'year')

// 第四个参数是两个字符 '[' 表示包含, '(' 表示不包含
// '()' 不包含开始和结束的日期 (默认)
// '[]' 包含开始和结束的日期
// '[)' 包含开始日期但不包含结束日期
// 例如，当想包含开始的日期作为比较依据，你应该使用“day”作为第三个参数。
dayjs('2016-10-30').isBetween('2016-01-01', '2016-10-30', 'day', '[)')
```

## isLeapYear

isLeapYear 插件增加了 `.isLeapYear()` API 返回一个 blooean 来展示一个 Day.js 对象的年份是不是闰年。

```js
var isLeapYear = require('dayjs/plugin/isLeapYear')
dayjs.extend(isLeapYear)

dayjs('2000-01-01').isLeapYear() // true
```

## isSameOrAfter

isSameOrAfter 插件增加了 `.isSameOrAfter()` API 返回一个 boolean 来展示一个时间是否和一个时间相同或在其之后。

```js
var isSameOrAfter = require('dayjs/plugin/isSameOrAfter')
dayjs.extend(isSameOrAfter)

dayjs('2010-10-20').isSameOrAfter('2010-10-19', 'year')
```

## isSameOrBefore

isSameOrBefore 插件增加了 `.isSameOrBefore()` API 返回一个 boolean 来展示一个时间是否和一个时间相同或在其之前。

```js
var isSameOrBefore = require('dayjs/plugin/isSameOrBefore')
dayjs.extend(isSameOrBefore)

dayjs('2010-10-20').isSameOrBefore('2010-10-19', 'year')
```

## isToday

isToday 插件增加了 `.isToday()` API 来判断当前 Day.js 对象是否是今天。

```js
var isToday = require('dayjs/plugin/isToday')

dayjs.extend(isToday)

dayjs().isToday() // true
```

## isTomorrow

isTomorrow 插件增加了 `.isTomorrow()` API 来判断当前 Day.js 对象是否是明天。

```js
var isTomorrow = require('dayjs/plugin/isTomorrow')

dayjs.extend(isTomorrow)

dayjs().add(1, 'day').isTomorrow() // true
```

## isYesterday

isYesterday 插件增加了 `.isYesterday()` API 来判断当前 Day.js 对象是否是昨天。

```js
var isYesterday = require('dayjs/plugin/isYesterday')

dayjs.extend(isYesterday)

dayjs().add(-1, 'day').isYesterday() // true
```

## isoWeek

isoWeek 插件添加了 `.isoWeek()` API 以获取或设置年度的 ISO 周数，并添加 `.isoWeekday()` 获取或设置一周的 ISO 日和 `.isoWeekYear()` 获取 ISO 周年，并扩展 `.startOf`、`.endOf` APIs 支持单位 `isoWeek`。

```js
var isoWeek = require('dayjs/plugin/isoWeek')

dayjs.extend(isoWeek)

dayjs().isoWeek()
dayjs().isoWeekday()
dayjs().isoWeekYear()
```

## isoWeeksInYear

isoWeeksInYear 增加了 `.isoWeeksInYear()` API 返回一个 number 来得到依据 ISO week 标准一年中有几周。

::: warning 注意
这依赖 [`isLeapYear`](#isleapyear) 插件，才能正常运行。
:::

```js
var isoWeeksInYear = require('dayjs/plugin/isoWeeksInYear')
var isLeapYear = require('dayjs/plugin/isLeapYear') // dependent on isLeapYear plugin
dayjs.extend(isoWeeksInYear)
dayjs.extend(isLeapYear)

dayjs('2004-01-01').isoWeeksInYear() // 53
dayjs('2005-01-01').isoWeeksInYear() // 52
```

## localeData

localeData 插件增加了 `dayjs().localeData` API 来提供本地化数据。

```js
var localeData = require('dayjs/plugin/localeData')
dayjs.extend(localeData)

dayjs().localeData()
```

支持的方法：

```js
dayjs.months()
dayjs.monthsShort()
dayjs.weekdays()
dayjs.weekdaysShort()
dayjs.weekdaysMin()
dayjs.longDateFormat('L')

globalLocaleData = dayjs.localeData()
globalLocaleData.firstDayOfWeek()
globalLocaleData.months()
globalLocaleData.monthsShort()
globalLocaleData.weekdays()
globalLocaleData.weekdaysShort()
globalLocaleData.weekdaysMin()
globalLocaleData.longDateFormat('L')

globalLocaleData.months(dayjs())
globalLocaleData.monthsShort(dayjs())
globalLocaleData.weekdays(dayjs())
globalLocaleData.weekdaysShort(dayjs())
globalLocaleData.weekdaysMin(dayjs())
globalLocaleData.meridiem()
globalLocaleData.ordinal()

instanceLocaleData = dayjs().localeData()
instanceLocaleData.firstDayOfWeek()
instanceLocaleData.months()
instanceLocaleData.monthsShort()
instanceLocaleData.weekdays()
instanceLocaleData.weekdaysShort()
instanceLocaleData.weekdaysMin()
instanceLocaleData.longDateFormat('L')
instanceLocaleData.meridiem()
instanceLocaleData.ordinal()
```

## localizedFormat

localizedFormat 插件扩展了 [`dayjs().format`](../api/display#format) API 以支持更多本地化的长日期格式。

```js
var localizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(localizedFormat)

dayjs().format('L LT')
```

[支持的本地化格式列表](../api/display#format)

## minMax

minMax 增加了 `.min`、`.max` API 返回一个 `dayjs` 来比较传入的 Day.js 实例的大小。它接受传入多个 Day.js 实例或一个数组。

```js
var minMax = require('dayjs/plugin/minMax')
dayjs.extend(minMax)

dayjs.max(dayjs(), dayjs('2018-01-01'), dayjs('2019-01-01'))
dayjs.min([dayjs(), dayjs('2018-01-01'), dayjs('2019-01-01')])
```

## objectSupport

objectSupport 插件扩展了 `dayjs()`、`dayjs.utc`、`dayjs().set`、`dayjs().add`、`dayjs().subtract` API 以传入对象参数。

```js
var objectSupport = require('dayjs/plugin/objectSupport')
dayjs.extend(objectSupport)

dayjs({
  year: 2010,
  month: 1,
  day: 12
})
dayjs.utc({
  year: 2010,
  month: 1,
  day: 12
})
dayjs().set({ year: 2010, month: 1, day: 12 })
dayjs().add({ M: 1 })
dayjs().subtract({ month: 1 })
```

## pluralGetSet

pluralGetSet 插件增加了复数形式的 API：`.milliseconds()`、`.seconds()`、`.minutes()`、`.hours()`、`.days()`、`.weeks()`、`.isoWeeks()`、`.months()`、`.quarters()`、`.years()`、`.dates()`。

```js
var pluralGetSet = require('dayjs/plugin/pluralGetSet')
dayjs.extend(pluralGetSet)

dayjs().millisecond()
dayjs().milliseconds()
```

## preParsePostFormat

预解析/后格式化让你在解析前处理输入，并格式化要输出的字符串。参考类似 moment.js 国际化里的用法。

::: danger 注意
此插件需要在 [localeData](#localedata) 插件之前导入（因为有依赖关系），并且会改变 [relativeTime](#relativetime) 插件的相关行为。
:::

例如，在阿拉伯语言中，它被用于支持阿拉伯数字的特殊显示：

```js
// Arabic [ar]
import dayjs from 'dayjs'
import preParsePostFormat from 'dayjs/plugin/preParsePostFormat'
dayjs.extend(preParsePostFormat)

const months =
  'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split(
    '_'
  )
const symbolMap = {
  1: '١',
  2: '٢',
  3: '٣',
  4: '٤',
  5: '٥',
  6: '٦',
  7: '٧',
  8: '٨',
  9: '٩',
  0: '٠'
}

const numberMap = {
  '١': '1',
  '٢': '2',
  '٣': '3',
  '٤': '4',
  '٥': '5',
  '٦': '6',
  '٧': '7',
  '٨': '8',
  '٩': '9',
  '٠': '0'
}

const locale = {
  name: 'ar',
  // ...
  preparse(string) {
    return string
      .replace(/[١٢٣٤٥٦٧٨٩٠]/g, match => numberMap[match])
      .replace(/،/g, ',')
  },
  postformat(string) {
    return string.replace(/\d/g, match => symbolMap[match]).replace(/,/g, '،')
  }
  // ...
}
// ...
```

[单元测试](https://github.com/iamkun/dayjs/blob/dev/test/plugin/preParsePostFormat.test.js)也应该能让你很好地了解如何使用插件。

## quarterOfYear

quarterOfYear 插件增加了 `.quarter()` API 返回当前实例是哪个季度，并扩展了 `.add`、`.subtract`、`.startOf`、`.endOf` API 来支持 `quarter` 季度单位。

```js
var quarterOfYear = require('dayjs/plugin/quarterOfYear')
dayjs.extend(quarterOfYear)

dayjs('2010-04-01').quarter() // 2
dayjs('2010-04-01').quarter(2)
```

## relativeTime

relativeTime 插件增加了 `.from`、`.to`、`.fromNow`、`.toNow` 4 个 API 来展示相对的时间（例如，3 小时以前）。

```js
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

dayjs().from(dayjs('1990-01-01')) // 31 年后
dayjs().from(dayjs('1990-01-01'), true) // 31 年
dayjs().fromNow()

dayjs().to(dayjs('1990-01-01')) // 31 年前
dayjs().toNow()
```

- 距离现在的相对时间：`.fromNow(withoutSuffix?: boolean)`
- 距离 X 的相对时间：`.fromNow(compared: Dayjs, withoutSuffix?: boolean)`
- 到现在的相对时间：`.toNow(withoutSuffix?: boolean)`
- 到 X 的相对时间：`.toNow(compared: Dayjs, withoutSuffix?: boolean)`

[时间范围划分标准](../api/display#fromnow)

## timezone

timezone 插件添加了 `dayjs.tz`、`.tz`、`.tz.guess`、`.tz.setDefault` API，在时区之间解析或显示。

```js
var utc = require('dayjs/plugin/utc')
var timezone = require('dayjs/plugin/timezone') // dependent on utc plugin

dayjs.extend(utc)
dayjs.extend(timezone)

const timestamp = "2014-06-01 12:00"
const tz = "America/New_York"

const dayjsLocal = dayjs(timestamp); //assumes UTC
//dayjsLocal.toISOString() -> 2014-06-01T12:00:00.000Z
//dayjsLocal.format('YYYY-MM-DDTHH:mm:ss') -> 2014-06-01T12:00:00

const dayjsAmerica = dayjsLocal.tz(tz)  //existing time treated as UTC
//dayjsAmerica.toISOString() -> 2014-06-01T12:00:00.000Z
//dayjsAmerica.format('YYYY-MM-DDTHH:mm:ss') -> 2014-06-01T08:00:00

const dayjsAmericaKeep = dayjsLocal.tz(tz, true) //existing time treated as local time
//dayjsAmericaKeep.toISOString() -> 2014-06-01T16:00:00.000Z
//dayjsAmericaKeep.format('YYYY-MM-DDTHH:mm:ss') -> 2014-06-01T12:00:00
```

推测用户时区：

```js
dayjs.tz.guess()
```

解析时区的时间：

```js
const d1 = dayjs.tz('2013-11-18 11:55', 'Asia/Taipei')
d1.format() // => 2013-11-18T11:55:00+08:00
d1.toISOString() // => 2013-11-18T03:55:00.000Z
```

转换至目标时区：

```js
const d2 = dayjs.utc('2013-11-18 11:55').tz('Asia/Taipei')
d2.format() // => 2013-11-18T19:55:00+08:00
d2.toISOString() // => 2013-11-18T11:55:00.000Z
```

设置/重置默认时区：

```js
// Setting the default timezone
dayjs.tz.setDefault('America/New_York')

// Resetting the default timezone to the system timezone
dayjs.tz.setDefault()
```

## toArray

toArray 插件增加了 `.toArray()` API 来返回包含的时间数值的数组。

```js
var toArray = require('dayjs/plugin/toArray')
dayjs.extend(toArray)

dayjs('2019-01-25').toArray() // [ 2019, 0, 25, 0, 0, 0, 0 ]
```

## toObject

toObject 插件增加了 `.toObject()` API 来返回包含时间的数值的对象。

```js
var toObject = require('dayjs/plugin/toObject')
dayjs.extend(toObject)

dayjs('2019-01-25').toObject()
/* { years: 2019,
     months: 0,
     date: 25,
     hours: 0,
     minutes: 0,
     seconds: 0,
     milliseconds: 0 } */
```

## updateLocale

updateLocale 插件增加了 `.updateLocale` API 来更新语言配置的属性。

```js
var updateLocale = require('dayjs/plugin/updateLocale')
dayjs.extend(updateLocale)

dayjs.updateLocale('en', {
  months : String[]
})
```

## utc

utc 插件增加了 `.utc`、`.local`、`.isUTC` APIs 使用 UTC 模式来解析和展示时间。

```js
var utc = require('dayjs/plugin/utc')
dayjs.extend(utc)

// 默认当地时间
dayjs().format() //2019-03-06T17:11:55+08:00

// UTC 模式
dayjs.utc().format() // 2019-03-06T09:11:55Z

// 将本地时间转换成 UTC 时间
dayjs().utc().format() // 2019-03-06T09:11:55Z

// 在 UTC 模式下，所有的展示方法都将使用 UTC 而不是本地时区
// 所有的 get 和 set 方法也都会使用 Date#getUTC* 和 Date#setUTC* 而不是 Date#get* and Date#set*
dayjs.utc().isUTC() // true
dayjs.utc().local().format() //2019-03-06T17:11:55+08:00
dayjs.utc('2018-01-01', 'YYYY-MM-DD') // with CustomParseFormat plugin
```

默认情况下，Day.js 默认使用用户本地时间来解析和展示时间。如果想要使用 UTC 模式来解析和展示时间，可以使用 `dayjs.utc()` 而不是 `dayjs()`。

- **dayjs.utc**

  `dayjs.utc(dateType?: string | number | Date | Dayjs, format? string)`

  返回一个使用 UTC 模式的 Dayjs 对象。

- **Use UTC time**

  `.utc()`

  返回一个复制的包含使用 UTC 模式标记的 Dayjs 对象。

- **Use local time**

  `.local()`

  返回一个复制的包含使用本地时区标记的 Dayjs 对象。

- **Set UTC offset**

  `.utcOffset()`

  返回一个复制的使用 UTC 模式的 Day.js 对象。

- **isUTC mode**

  `.isUTC()`

  返回一个 boolean 来展示当前 Day.js 对象是不是在 UTC 模式下。

## weekOfYear

weekOfYear 插件增加了 `.week()` API 返回一个 number 来表示 Day.js 的日期是年中第几周。

```js
var weekOfYear = require('dayjs/plugin/weekOfYear')
dayjs.extend(weekOfYear)

dayjs('2018-06-27').week() // 26
dayjs('2018-06-27').week(5) // 设置周
```

## weekYear

weekYear 插件增加了 `.weekYear()` API 来获取基于当前语言的按周计算的年份。

```js
var weekYear = require('dayjs/plugin/weekYear') // dependent on weekOfYear plugin
var weekOfYear = require('dayjs/plugin/weekOfYear')
dayjs.extend(weekOfYear)
dayjs.extend(weekYear)

dayjs().weekYear()
```

## weekday

weekday 插件增加了 `.weekday()` API 来获取或设置当前语言的星期。

```js
var weekday = require('dayjs/plugin/weekday')
dayjs.extend(weekday)

// 当星期天是一周的第一天
dayjs().weekday(-7); // 上个星期天
dayjs().weekday(7); // 下个星期天

// 当星期一是一周的第一天
dayjs().weekday(-7) // 上个星期一
dayjs().weekday(7) // 下个星期一
```
