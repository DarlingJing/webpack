const path = require("path")
const htmlWebpackPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')

module.exports = {
  // 入口
  entry: './src/index.js',
  // entry: {
  //   index: './src/index.js',
  //   login: './src/login.js',
  // },
  // 打包模式
  mode: 'development',
  // 出口
  output: {
    // 输出资源存放位置，必须是绝对路径
    path: path.resolve(__dirname, "./dist"),
    // 资源名称 占位符 [name] [hash] [chunkhash] [contenthash]
    filename: '[name]-[contenthash:6].js'
  },
  module: {
    rules: [{
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }, {
        test: /\.less$/i,
        use: [
          miniCssExtractPlugin.loader,
          // compiles Less to CSS
          // 'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.js$/i,
        use: ['replace-loader.js', {
          loader: 'replace-loader-async.js',
          options: {
            name: 'luojing99999'
          }
        }],
      }
    ],
  },
  resolveLoader: {
    modules: ['node_modules', './myLoaders']
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      // chunks: ['index']
    }),
    // new htmlWebpackPlugin({
    //   template: './src/index.html',
    //   filename: 'login.html',
    //   chunks: ['login']
    // }),
    new CleanWebpackPlugin(),
    new miniCssExtractPlugin({
      filename: 'css/index-[contenthash:6].css'
    })
  ],
}