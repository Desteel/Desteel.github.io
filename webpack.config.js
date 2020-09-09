const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const babel = require("./webpack_config/babel");
const css = require("./webpack_config/css");
const extractCSS = require("./webpack_config/css.extract");
const devserver = require("./webpack_config/devserver");
const files = require("./webpack_config/files");
const fonts = require("./webpack_config/fonts");

const PRODUCTION = process.env.NODE_ENV === "production";

const PATHS = {
  source: path.join(__dirname, "AddressBook/src"),
  build: path.join(__dirname, "AddressBook/dist")
};

const commonConfig = merge([
  {
    mode: "production",
    entry: {
      index: `${PATHS.source}/index.js`
    },
    output: {
      path: PATHS.build,
      filename: "[name].js",
      libraryTarget: "umd",
      library: "[name]",
      umdNamedDefine: true,
      libraryExport: "default"
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          exclude: /\/custom/,
          uglifyOptions: {
            output: {
              comments: false
            }
          }
        })
      ],
      splitChunks: {
        cacheGroups: {
          commons: {
            minChunks: 2,
            name: "common",
            chunks: "all",
            enforce: true
          }
        }
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        favicon: `${PATHS.source}/favicon.ico`,
        filename: "index.html",
        chunks: ["index", "common"],
        template: `${PATHS.source}/index.html`
      }),

      new webpack.DefinePlugin({
        PRODUCTION: PRODUCTION
      }),

      new webpack.ProvidePlugin({
        React: "react",
        ReactDOM: "react-dom"
      })
    ]
  },
  files(),
  fonts(),
  babel()
]);

module.exports = (_env, argv) => {
  if (argv.mode === "production") {
    return merge([commonConfig, extractCSS()]);
  }
  if (argv.mode === "development") {
    return merge([commonConfig, devserver(), css()]);
  }
};
