const CompressionWebpackPlugin = require('compression-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const Timestamp = new Date().getTime();
const productionGzipExtensions = ['js', 'css']
const isProduction = process.env.NODE_ENV === 'production'
module.exports = {
  productionSourceMap: !isProduction,
  // publicPath: '/acc/',
  lintOnSave:false,
  configureWebpack: {
    devtool: 'source-map',
    output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
      filename: `[name].${'app'}.${Timestamp}.js`,
      chunkFilename: `[name].${'app'}.${Timestamp}.js`
    },
    // externals: {
    //   axios: "axios"
    // },
    plugins: [
      new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      }),
      // new BundleAnalyzerPlugin()
    ],
    devServer: {
      // 设置代理
      proxy: {
        "/front": {
          target: "http://192.168.1.112:8080/", // 域名
          ws: true, // 是否启用websockets
          changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
          pathRewrite: {
            "^/front": "/"
          }
        }
      }
    }
  }
  

}
