const fs = require('fs')

// const https = {
//   key: fs.readFileSync('./ssl-cert/localhost.key'),
//   cert: fs.readFileSync('./ssl-cert/localhost.crt')
// }
const proxyTarget = 'http://localhost:8081/'
const https = false
module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    devServer: {
      historyApiFallback: true,
      https,
      port: 11111,
      open: false, // opens browser window automatically
      proxy: {
        '/*': {
          target: proxyTarget,
          changeOrigin: true,
          secure: false
        },
        '/_i': {
          target: proxyTarget,
          ws: false,
          changeOrigin: true,
          secure: false
        }
      },
      host: 'localhost'
    }
  }
}
