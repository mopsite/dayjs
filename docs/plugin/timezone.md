# 时区

Day.js 使用了 [Internationalization API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) 来设置和使用时区。可以在以下[这些环境](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat#browser_compatibility)中直接使用。通过使用原生 API，无需在代码包中打包额外的时区数据。

所有时区名称都可以在 [IANA 数据库](https://www.iana.org/time-zones)中查看。

对于就环境或不支持的环境，请选用合适的 [polyfill](https://github.com/formatjs/date-time-format-timezone)。

::: warning 注意
这依赖 [Timezone](./#timezone) 插件，才能正常运行。
:::

```js
dayjs.extend(utc)
dayjs.extend(timezone)

// current time zone is 'Europe/Berlin' (offset +01:00)
// Parsing
dayjs.tz("2013-11-18 11:55:20", "America/Toronto") // '2013-11-18T11:55:20-05:00'

// Converting (from time zone 'Europe/Berlin'!)
dayjs("2013-11-18 11:55:20").tz("America/Toronto") // '2013-11-18T05:55:20-05:00'
```

## 解析时区

使用给定时区解析日期时间字符串并返回 Day.js 对象实例。

::: warning 注意
这依赖 [Timezone](./#timezone) 插件，才能正常运行。
:::

```js
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz("2013-11-18T11:55:20", "America/Toronto") // '2013-11-18T11:55:20-05:00'
```

如果你知道输入字符串的格式，你可以用它来解析一个日期，参数与[字符串 + 格式](../api/parse#字符串-格式)完全相同。

::: warning 注意
这依赖 [CustomParseFormat](./#customparseformat) 插件，才能正常运行。
:::

```js
dayjs.extend(customParseFormat)
dayjs.tz("12-25-1995", "MM-DD-YYYY", "America/Toronto")
```

## 转换到对应的时区

转换到对应时区并更新 UTC 偏移量，返回 Day.js 对象实例。

::: warning 注意
这依赖 [Timezone](./#timezone) 插件，才能正常运行。
:::

```js
dayjs.extend(utc)
dayjs.extend(timezone)

// this example runs in time zone 'Europe/Berlin' (offset +01:00)
dayjs("2013-11-18T11:55:20") // '2013-11-18T11:55:20+01:00'
dayjs("2013-11-18T11:55:20").tz("America/Toronto") // '2013-11-18T05:55:20-05:00'
dayjs("2013-11-18T11:55:20").tz("America/Toronto", true) // '2013-11-18T11:55:20-05:00'
```

当传递第二个参数为 true 时，只更新时区（和偏移量），本地时间将保持不变。

## 用户当前时区

返回用户当前时区。

::: warning 注意
这依赖 [Timezone](./#timezone) 插件，才能正常运行。
:::

```js
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.guess() // America/Chicago
```

## 设置默认时区

将默认时区从本地时区变为自定义时区。

你仍然可以在指定的 `dayjs` 对象中自定义不同的时区。

::: warning 注意
这依赖 [Timezone](./#timezone) 插件，才能正常运行。
:::

```js
dayjs.extend(utc)
dayjs.extend(timezone)

dayjs.tz.setDefault("America/New_York")

// 和 dayjs.tz("2014-06-01 12:00", "America/New_York") 同样行为
dayjs.tz("2014-06-01 12:00")  // 2014-06-01T12:00:00-04:00

// 使用另一个时区
dayjs.tz("2014-06-01 12:00", "Asia/Tokyo")  // 2014-06-01T12:00:00+09:00

// 重置默认时区
dayjs.tz.setDefault()
```

`dayjs.tz.setDefault` 不会影响现有的 `dayjs` 对象。
