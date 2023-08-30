# 自定义

想自定义 Day.js 也很容易。

你可以创建一个新的语言配置。

```js
var localeObject = {...} // Day.js 语言对象，下面有详述
dayjs.locale('en-my-settings', localeObject);
```

你也可以更新一个已有的语言配置。

::: warning 注意
这依赖 [UpdateLocale](./#updatelocale) 插件，才能正常运行。
:::

```js
dayjs.extend(updateLocale)

dayjs.updateLocale('en', {
  /**/
})
```

Day.js 的语言对象模板：

```js
const localeObject = {
  name: 'es', // name String
  weekdays: 'Domingo_Lunes ...'.split('_'), // weekdays Array
  weekdaysShort: 'Sun_M'.split('_'), // OPTIONAL, short weekdays Array, use first three letters if not provided
  weekdaysMin: 'Su_Mo'.split('_'), // OPTIONAL, min weekdays Array, use first two letters if not provided
  weekStart: 1, // OPTIONAL, set the start of a week. If the value is 1, Monday will be the start of week instead of Sunday。
  yearStart: 4, // OPTIONAL, the week that contains Jan 4th is the first week of the year.
  months: 'Enero_Febrero ... '.split('_'), // months Array
  monthsShort: 'Jan_F'.split('_'), // OPTIONAL, short months Array, use first three letters if not provided
  ordinal: n => `${n}º`, // ordinal Function (number) => return number + output
  formats: {
    // abbreviated format options allowing localization
    LTS: 'h:mm:ss A',
    LT: 'h:mm A',
    L: 'MM/DD/YYYY',
    LL: 'MMMM D, YYYY',
    LLL: 'MMMM D, YYYY h:mm A',
    LLLL: 'dddd, MMMM D, YYYY h:mm A',
    // lowercase/short, optional formats for localization
    l: 'D/M/YYYY',
    ll: 'D MMM, YYYY',
    lll: 'D MMM, YYYY h:mm A',
    llll: 'ddd, MMM D, YYYY h:mm A'
  },
  relativeTime: {
    // relative time format strings, keep %s %d as the same
    future: 'in %s', // e.g. in 2 hours, %s been replaced with 2hours
    past: '%s ago',
    s: 'a few seconds',
    m: 'a minute',
    mm: '%d minutes',
    h: 'an hour',
    hh: '%d hours', // e.g. 2 hours, %d been replaced with 2
    d: 'a day',
    dd: '%d days',
    M: 'a month',
    MM: '%d months',
    y: 'a year',
    yy: '%d years'
  },
  meridiem: (hour, minute, isLowercase) => {
    // OPTIONAL, AM/PM
    return hour > 12 ? 'PM' : 'AM'
  }
}
```

Day.js 的语言文件模板（例如 `dayjs/locale/es.js`）：

```js
mport dayjs from 'dayjs'

const locale = { ... } // Day.js 的语言对象.

dayjs.locale(locale, null, true) // load locale for later use

export default locale
```

## Month Names

`Locale#months` 应该是一个包含月份的数组。

::: warning 注意
这依赖 [UpdateLocale](./#updatelocale) 插件，才能正常运行。
:::

```js
dayjs.extend(updateLocale)

dayjs.updateLocale('en', {
  months: [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ]
})
```

如果需要更多处理来计算月份的名称（例如，如果不同格式的语法不同），则 `Locale#months` 可以是具有以下签名的函数，它应始终返回月份的名称。

```js
dayjs.updateLocale("en", {
  months: function (dayjsInstance, format) {
    // dayjsInstance is the Day.js object currently being formatted
    // format is the formatting string
    if (/^MMMM/.test(format)) {
      // if the format starts with 'MMMM'
      return monthShortFormat[dayjsInstance.month()];
    } else {
      return monthShortStandalone[dayjsInstance.month()];
    }
  },
});
```

## Month Abbreviations

`Locale#monthsShort` 应该是一个包含月份缩写的数组。

::: warning 注意
这依赖 [UpdateLocale](./#updatelocale) 插件，才能正常运行。
:::

```js
dayjs.extend(updateLocale)

dayjs.updateLocale('en', {
  monthsShort: [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ]
})
```

`Locale#monthsShort` 可以是一个回调函数，可参考 [`Locale#months`](#month-names)。

## Weekday Names

`Locale#weekdays` 应该是一个包含星期名称的数组。

::: warning 注意
这依赖 [UpdateLocale](./#updatelocale) 插件，才能正常运行。
:::

```js
dayjs.extend(updateLocale)

dayjs.updateLocale('en', {
  weekdays: [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ]
})
```

## Weekday Abbreviations

`Locale#weekdaysShort` 应该是一个包含星期名称的数组。

::: warning 注意
这依赖 [UpdateLocale](./#updatelocale) 插件，才能正常运行。
:::

```js
dayjs.extend(updateLocale)

dayjs.updateLocale('en', {
  weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
})
```

## Minimal Weekday Abbreviations

`Locale#weekdayMin` 是一个包含星期缩写（两个字母）的数组。

::: warning 注意
这依赖 [UpdateLocale](./#updatelocale) 插件，才能正常运行。
:::

```js
dayjs.extend(updateLocale)

dayjs.updateLocale('en', {
  weekdaysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
})
```

## Relative Time

`Locale#relativeTime` 应该是 `dayjs#from` 里来替换字符串的对象。

::: warning 注意
这依赖 [UpdateLocale](./#updatelocale) 插件，才能正常运行。
:::

```js
dayjs.extend(updateLocale)

dayjs.updateLocale('en', {
  relativeTime: {
    future: "in %s",
    past: "%s ago",
    s: 'a few seconds',
    m: "a minute",
    mm: "%d minutes",
    h: "an hour",
    hh: "%d hours",
    d: "a day",
    dd: "%d days",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years"
  }
})
```

`Locale#relativeTime.future` 代表未来日期的前缀/后缀。`Locale#relativeTime.past` 代表过去日期的前缀/后缀。

其余的属性，单字符代表单数，双字符代表负数。

### 更高级的占位符处理

如果语言配置需要更高级的占位符处理，则可以传入一个函数而不是字符串。函数应该返回一个字符串。

```js
relativeTime: {
  ...,
  yy: function (number, withoutSuffix, key, isFuture) {
    return string;
  }
}
```

`number` 参数代表该键的单位数。 对于 `m`，该数字是分钟数，以此类推。

如果要不带后缀显示，则传入 `without Suffix` 参数为 true，如果要带后缀显示，则为 false。 (之所以使用逻辑倒置，是因为默认的行为是显示后缀。)

`key` 参数代表 `Locale#relativeTime` 对象中的替换键（例如 `s`、`m`、`mm`、`h`等）。

如果要使用未来的后缀/前缀，则 `isFuture` 参数将会为 true，如果要使用过去的前缀/后缀，则为 false。

### Relative Time 的阈值和舍入函数配置

您可以在使用此插件时，通过传入一个配置对象来更新其阈值和舍入函数的配置。

```js
var config = {
  thresholds: [{}],
  rounding: function
}
dayjs.extend(relativeTime, config)
```

`thresholds` 是一个 `Array` 的 `Object` 定义了每个一分钟、一小时等等的单位。 例如，默认情况下，超过 45 秒会被视为一分钟，超过 22 小时会被视为一天，依此类推。 要改变这个，可以传入一个新的 `thresholds`。

```js
// strict thresholds
var thresholds = [
  { l: 's', r: 1 },
  { l: 'm', r: 1 },
  { l: 'mm', r: 59, d: 'minute' },
  { l: 'h', r: 1 },
  { l: 'hh', r: 23, d: 'hour' },
  { l: 'd', r: 1 },
  { l: 'dd', r: 29, d: 'day' },
  { l: 'M', r: 1 },
  { l: 'MM', r: 11, d: 'month' },
  { l: 'y', r: 1 },
  { l: 'yy', d: 'year' }
]
```

也可以添加自定义键值并更新相应的语言设置。

```js
var thresholds = [
  ...,
  { l: 'ss', r: 59, d: 'second' }
]
dayjs.updateLocale('en', {
  relativeTime: {
    ...,
    ss: "%d seconds"
  }
})
```

`rounding` 是一个根据语言配置在相对时间字符串展示之前处理数字的 `Function` 。 要改变这个，可以传入一个新的 `rounding`。

```js
// Math.round by default
var rounding = Math.floor
```

## Calendar

`Locale#calendar` 应该包含以下内容。

::: warning 注意
这依赖 [UpdateLocale](./#updatelocale) 插件，才能正常运行。
:::

```js
dayjs.extend(updateLocale)

dayjs.updateLocale('en', {
  calendar: {
    lastDay: '[Yesterday at] LT',
    sameDay: '[Today at] LT',
    nextDay: '[Tomorrow at] LT',
    lastWeek: '[last] dddd [at] LT',
    nextWeek: 'dddd [at] LT',
    sameElse: 'L'
  }
})
```

每个 `Locale#calendar` 的键值也可以是一个函数，这个函数的作用域是当前 Day.js 对象，且传入的第一个参数是代表当天的 Day.js 对象。 这个函数需要返回一个格式化后的字符串。

```js
function callback (now) {
  return '[hoy a la' + ((this.hour() !== 1) ? 's' : '') + ']' + now.format();
}
```
