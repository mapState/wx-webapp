const CompressionWebpackPlugin = require('compression-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const Timestamp = new Date().getTime();
const productionGzipExtensions = ['js', 'css']
const isProduction = process.env.NODE_ENV === 'production'
module.exports = {
  productionSourceMap: !isProduction,
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
    ]
  }
  

}
