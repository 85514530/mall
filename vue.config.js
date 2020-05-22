module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  },
  publicPath: './'
}
// const path = require('path')
// const resolve = dir => path.join(__dirname, dir)
// module.exports={
//   chainWebpack:(config)=>{
//       config.resolve.alias
//       .set('@',resolve('./src'))
//       .set('components',resolve('./src/components'))
//       .set('views',resolve('src/views'))
//       .set('network',resolve('src/network'))
//       .set('assets',resolve('src/assets'))
//       //set第一个参数：设置的别名，第二个参数：设置的路径
// 　　　　
//   }
// }
