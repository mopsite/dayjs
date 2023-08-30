# 查询

Day.js 对象还有很多查询的方法。

## isBefore()

Day.js 对象是否在另一个提供的日期时间之前，返回布尔值（默认以毫秒为单位）。

```js
dayjs().isBefore(dayjs('2011-01-01'))  // false
```

如果想使用处理毫秒以外的单位进行比较，则将单位作为第二个参数传入。

```js
dayjs().isBefore('2011-01-01', 'year')  // false
```

## isSame()

Day.js 对象是否和另一个提供的日期时间相同，返回布尔值（默认以毫秒为单位）。

```js
dayjs().isSame(dayjs('2011-01-01'))  // false
```

如果想使用除了毫秒以外的单位进行比较，则将单位作为第二个参数传入。

当使用第二个参数时，将会连同去比较更大的单位。如传入 `month` 将会比较 `month` 和 `year`，传入 `day` 将会比较 `day`、`month` 和 `year`。

```js
dayjs().isSame('2011-01-01', 'year')  // false
```

## isAfter()

Day.js 对象是否在另一个提供的日期时间之后，返回布尔值（默认以毫秒为单位）。

```js
dayjs().isAfter(dayjs('2011-01-01'))  // false
```

如果想使用除了毫秒以外的单位进行比较，则将单位作为第二个参数传入。

```js
dayjs().isAfter('2011-01-01', 'year')  // false
```

## isSameOrBefore()

Day.js 对象是否和另一个提供的日期时间相同或在其他之前。

::: warning 注意
使用本功能需先配置 [isSameOrBefore](../plugin/#issameorbefore) 插件，才能正常运行。
:::

```js
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
dayjs.extend(isSameOrBefore)

dayjs().isSameOrBefore('2011-01-01')
dayjs().isSameOrBefore('2011-01-01', 'year')
```

## isSameOrAfter()

Day.js 对象是否和另一个提供的日期时间相同或在其他之后。

::: warning 注意
使用本功能需先配置 [isSameOrAfter](../plugin/#issameorafter) 插件，才能正常运行。
:::

```js
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
dayjs.extend(isSameOrAfter)

dayjs().isSameOrAfter('2011-01-01')
dayjs().isSameOrAfter('2011-01-01', 'year')
```

## isBetween()

Day.js 对象是否和在其他两个日期时间之间。

::: warning 注意
使用本功能需先配置 [isBetween](../plugin/#isbetween) 插件，才能正常运行。
:::

```js
import isBetween from 'dayjs/plugin/isBetween'
dayjs.extend(isBetween)

dayjs().isBetween('2011-01-01', dayjs('2011-01-01'))
dayjs().isBetween('2011-01-01', '2011-01-01', 'year')
```

第四个参数是设置包容性。`[]` 表示包含，`()` 表示排除。要使用包容性参数，必须同时传入两个指令符。

```js
dayjs().isBetween('2011-01-01', '2011-01-01', null, '[）')
```

`isBefore`、`isSame`、`isAfter`、`isSameOrBefore`、`isSameOrAfter`、`isBetween` 支持的单位列表如下：

<!-- @include: ./manipulate.md{69,80} -->

## isDayjs()

表示一个变量是否为 Day.js 对象。

```js
dayjs.isDayjs(dayjs())     // true
dayjs.isDayjs(new Date())  // false
```

这和使用 `instanceof` 的结果是一样的：

```js
dayjs() istanceof() dayjs  // true
```

## isLeapYear()

查询 Day.js 对象的年份是否是闰年。

::: warning 注意
使用本功能需先配置 [isLeapYear](../plugin/#isleapyear) 插件，才能正常运行。
:::

```js
import isLeapYear from 'dayjs/plugin/isLeapYear'
dayjs.extend(isLeapYear)

dayjs('2000-01-01').isLeapYear()  // true
```
