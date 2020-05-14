module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWith: 375,    // 视窗宽度，对应我们设计稿的宽度
      viewportHeight: 667,  // 视窗高度，对应我们设计稿的高度
      unitPrecision: 5,     // 指定'px'转换为视窗单位值的小数位数(因为很多时候无法整除)
      viewportUnit: 'vw',   // 指定需要转换成的视窗单位，建议vw
      // 指定哪些.class不需要转化
      selectorBlackList: ['ignore', 'tab-bar', 'tab-bar-item'],
      minPixelValue: 1,     // 小于或等于'1px'不转化为视窗单位
      mediaQuery: false     // 允许在媒体查询中转换'px'
    }
  }
}