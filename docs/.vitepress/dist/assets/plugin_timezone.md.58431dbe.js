import{_ as s,o as a,c as n,X as l}from"./chunks/framework.24193736.js";const C=JSON.parse('{"title":"时区","description":"","frontmatter":{},"headers":[],"relativePath":"plugin/timezone.md","filePath":"plugin/timezone.md","lastUpdated":null}'),o={name:"plugin/timezone.md"},p=l(`<h1 id="时区" tabindex="-1">时区 <a class="header-anchor" href="#时区" aria-label="Permalink to &quot;时区&quot;">​</a></h1><p>Day.js 使用了 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank" rel="noreferrer">Internationalization API</a> 来设置和使用时区。可以在以下<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat#browser_compatibility" target="_blank" rel="noreferrer">这些环境</a>中直接使用。通过使用原生 API，无需在代码包中打包额外的时区数据。</p><p>所有时区名称都可以在 <a href="https://www.iana.org/time-zones" target="_blank" rel="noreferrer">IANA 数据库</a>中查看。</p><p>对于就环境或不支持的环境，请选用合适的 <a href="https://github.com/formatjs/date-time-format-timezone" target="_blank" rel="noreferrer">polyfill</a>。</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>这依赖 <a href="./#timezone">Timezone</a> 插件，才能正常运行。</p></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">dayjs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">extend</span><span style="color:#A6ACCD;">(utc)</span></span>
<span class="line"><span style="color:#A6ACCD;">dayjs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">extend</span><span style="color:#A6ACCD;">(timezone)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// current time zone is &#39;Europe/Berlin&#39; (offset +01:00)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Parsing</span></span>
<span class="line"><span style="color:#A6ACCD;">dayjs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">tz</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2013-11-18 11:55:20</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">America/Toronto</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// &#39;2013-11-18T11:55:20-05:00&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Converting (from time zone &#39;Europe/Berlin&#39;!)</span></span>
<span class="line"><span style="color:#82AAFF;">dayjs</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2013-11-18 11:55:20</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">tz</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">America/Toronto</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// &#39;2013-11-18T05:55:20-05:00&#39;</span></span></code></pre></div><h2 id="解析时区" tabindex="-1">解析时区 <a class="header-anchor" href="#解析时区" aria-label="Permalink to &quot;解析时区&quot;">​</a></h2><p>使用给定时区解析日期时间字符串并返回 Day.js 对象实例。</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>这依赖 <a href="./#timezone">Timezone</a> 插件，才能正常运行。</p></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">dayjs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">extend</span><span style="color:#A6ACCD;">(utc)</span></span>
<span class="line"><span style="color:#A6ACCD;">dayjs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">extend</span><span style="color:#A6ACCD;">(timezone)</span></span>
<span class="line"><span style="color:#A6ACCD;">dayjs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">tz</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2013-11-18T11:55:20</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">America/Toronto</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// &#39;2013-11-18T11:55:20-05:00&#39;</span></span></code></pre></div><p>如果你知道输入字符串的格式，你可以用它来解析一个日期，参数与<a href="./../api/parse.html#字符串-格式">字符串 + 格式</a>完全相同。</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>这依赖 <a href="./#customparseformat">CustomParseFormat</a> 插件，才能正常运行。</p></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">dayjs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">extend</span><span style="color:#A6ACCD;">(customParseFormat)</span></span>
<span class="line"><span style="color:#A6ACCD;">dayjs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">tz</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">12-25-1995</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">MM-DD-YYYY</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">America/Toronto</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><h2 id="转换到对应的时区" tabindex="-1">转换到对应的时区 <a class="header-anchor" href="#转换到对应的时区" aria-label="Permalink to &quot;转换到对应的时区&quot;">​</a></h2><p>转换到对应时区并更新 UTC 偏移量，返回 Day.js 对象实例。</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>这依赖 <a href="./#timezone">Timezone</a> 插件，才能正常运行。</p></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">dayjs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">extend</span><span style="color:#A6ACCD;">(utc)</span></span>
<span class="line"><span style="color:#A6ACCD;">dayjs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">extend</span><span style="color:#A6ACCD;">(timezone)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// this example runs in time zone &#39;Europe/Berlin&#39; (offset +01:00)</span></span>
<span class="line"><span style="color:#82AAFF;">dayjs</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2013-11-18T11:55:20</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// &#39;2013-11-18T11:55:20+01:00&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">dayjs</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2013-11-18T11:55:20</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">tz</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">America/Toronto</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// &#39;2013-11-18T05:55:20-05:00&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">dayjs</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2013-11-18T11:55:20</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">tz</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">America/Toronto</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// &#39;2013-11-18T11:55:20-05:00&#39;</span></span></code></pre></div><p>当传递第二个参数为 true 时，只更新时区（和偏移量），本地时间将保持不变。</p><h2 id="用户当前时区" tabindex="-1">用户当前时区 <a class="header-anchor" href="#用户当前时区" aria-label="Permalink to &quot;用户当前时区&quot;">​</a></h2><p>返回用户当前时区。</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>这依赖 <a href="./#timezone">Timezone</a> 插件，才能正常运行。</p></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">dayjs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">extend</span><span style="color:#A6ACCD;">(utc)</span></span>
<span class="line"><span style="color:#A6ACCD;">dayjs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">extend</span><span style="color:#A6ACCD;">(timezone)</span></span>
<span class="line"><span style="color:#A6ACCD;">dayjs</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">tz</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">guess</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// America/Chicago</span></span></code></pre></div><h2 id="设置默认时区" tabindex="-1">设置默认时区 <a class="header-anchor" href="#设置默认时区" aria-label="Permalink to &quot;设置默认时区&quot;">​</a></h2><p>将默认时区从本地时区变为自定义时区。</p><p>你仍然可以在指定的 <code>dayjs</code> 对象中自定义不同的时区。</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>这依赖 <a href="./#timezone">Timezone</a> 插件，才能正常运行。</p></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">dayjs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">extend</span><span style="color:#A6ACCD;">(utc)</span></span>
<span class="line"><span style="color:#A6ACCD;">dayjs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">extend</span><span style="color:#A6ACCD;">(timezone)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">dayjs</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">tz</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setDefault</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">America/New_York</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 和 dayjs.tz(&quot;2014-06-01 12:00&quot;, &quot;America/New_York&quot;) 同样行为</span></span>
<span class="line"><span style="color:#A6ACCD;">dayjs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">tz</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2014-06-01 12:00</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)  </span><span style="color:#676E95;font-style:italic;">// 2014-06-01T12:00:00-04:00</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 使用另一个时区</span></span>
<span class="line"><span style="color:#A6ACCD;">dayjs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">tz</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2014-06-01 12:00</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Asia/Tokyo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)  </span><span style="color:#676E95;font-style:italic;">// 2014-06-01T12:00:00+09:00</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 重置默认时区</span></span>
<span class="line"><span style="color:#A6ACCD;">dayjs</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">tz</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setDefault</span><span style="color:#A6ACCD;">()</span></span></code></pre></div><p><code>dayjs.tz.setDefault</code> 不会影响现有的 <code>dayjs</code> 对象。</p>`,28),e=[p];function t(c,r,y,i,D,A){return a(),n("div",null,e)}const d=s(o,[["render",t]]);export{C as __pageData,d as default};