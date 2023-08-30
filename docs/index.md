---
# https://skewb.gitee.io/vitepress/reference/default-theme-home-page
layout: home
titleTemplate: 2kb 大小的 JavaScript 时间日期库

hero:
  name: Day.js
  text: 2kb 的 JS 时间日期库
  tagline: Moment.js 的轻量化方案，拥有同样强大的 API。
  actions:
    - theme: brand
      text: 开始使用
      link: /start/
    - theme: alt
      text: 在 Gitee 上查看
      link: https://gitee.com/skewb/dayjs

features:
  - icon: 🪶
    title: 轻量的
    details: 下载、解析和执行更少的 JavaScript，为你的代码留出更多时间。
  - icon: ⚙
    title: 不可变
    details: 所有 API 操作都放回一个新的 Dayjs 对象，避免产生 bug，节约调试时间。
  - icon: ⭐️
    title: 国际化
    details: 对国际化支持良好，但除非手动加载，多国语言默认不会被打包到工程里。
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(40px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(72px);
  }
}
</style>
