const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");


module.exports = {
  mode: "development",
  // The application entry point
  entry: "./src/index.js",
  // watch: true,
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
    ignored: path.resolve(__dirname, 'node_modules/')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      //use babel-loader to transpile js files
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: path.resolve(__dirname, 'node_modules/')
      },

      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              // options...
            }
          }
        ]
      },
    ]
  },
  // Where to compile the bundle
  // By default the output directory is `dist`
  output: {
    path: path.join(__dirname, "dist"),
    filename: "js/bundle.js"
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, "dist"),
    port: 3000,
    publicPath: "/dist/"
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/mystyles.css'
    }),
    new VueLoaderPlugin()
  ]
};