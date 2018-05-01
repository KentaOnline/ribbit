const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "./frontend/app.tsx")
  },
  output: {
    path: path.resolve(__dirname, "./dist/"),
    filename: "[name].bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".less", ".css", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{ loader: "babel-loader" }, { loader: "ts-loader" }]
      },
      {
        test: /\.(css|less)$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "less-loader" }
        ]
      } /*,
      {
        test: /\.json$/,
        use: [
          {loader: "json-loader"}
        ]
      }*/
    ]
  },
  node: {
    fs: "empty"
  },
  plugins: [
    new webpack.IgnorePlugin(
      /^((fs)|(path)|(os)|(crypto)|(source-map-support))$/,
      /vs\/language\/typescript\/lib/
    ),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "./index.html"),
        to: path.resolve(__dirname, "./dist/")
      },
      {
        from: path.resolve(__dirname, "./static/**/*"),
        to: path.resolve(__dirname, "./dist/")
      }
    ])
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          mangle: false, // <= This is necessary, otherwise IPFS will has error to connect.
          output: {
            comments: false
          },
          compress: {
            unsafe_comps: true,
            properties: true,
            keep_fargs: false,
            pure_getters: true,
            collapse_vars: true,
            unsafe: true,
            warnings: false,
            sequences: true,
            dead_code: true,
            drop_debugger: true,
            comparisons: true,
            conditionals: true,
            evaluate: true,
            booleans: true,
            loops: true,
            unused: true,
            hoist_funs: true,
            if_return: true,
            join_vars: true,
            drop_console: true
          }
        }
      })
    ]
  }
};
