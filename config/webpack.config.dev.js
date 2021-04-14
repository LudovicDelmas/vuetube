const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");


module.exports = {
  mode: "development",
  // The application entry point
  entry: "./src/index.js",

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      //use babel-loader to transpile js files
      {
        test: /\.js$/,
        loader: "babel-loader"
      },

      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          //{ loader: 'vue-style-loader'},
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

      // css-loader to bundle all the css files into one file and vue-style-loader
      // to add all the styles inside the <style> block in `.vue` file.
      {
        test: /\.css$/,
        use: [
          { loader: 'vue-style-loader'},
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  },
  // Where to compile the bundle
  // By default the output directory is `dist`
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "../dist"),
    port: 3000,
    publicPath: "/dist/"
  },
  plugins: [
    // make sure to include the plugin for the magic
    new MiniCssExtractPlugin({
      filename: 'css/mystyles.css'
    }),
    new VueLoaderPlugin()
 
  ]
};