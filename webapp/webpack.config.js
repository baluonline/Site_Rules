const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require("webpack");
const extractSass = new ExtractTextPlugin({
  filename: "[name].[hash].css",
  disable: process.env.NODE_ENV === "development",
});
module.exports = {
  mode: "development",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  entry: {
    app: "./src/index.js",
  },
  /*  output: {
    filename: "[name].[hash].js",
  }, */
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              // name: "./images/[name].[hash].[ext]",
              name: "[path][name]-[hash:8].[ext]",
            },
          },
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            {
              loader: "css-loader",
            },
            {
              loader: "sass-loader",
            },
          ],
          // use style-loader in development
          fallback: "style-loader",
        }),
      },
      {
        test: /\.css$/,
        use: extractSass.extract({
          fallback: "style-loader",
          use: "css-loader",
        }),
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    port: 4001,
    /*    contentBase: './dist',
    historyApiFallback: true,
    hot: true */
  },
  plugins: [
    extractSass,
    // new ExtractTextPlugin('[name].[hash].css'),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      favicon: "./public/logo.png",
    }),
    /*   new CleanWebpackPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin() */
  ],
  externals: {
    // global app config object
    config: JSON.stringify({
      apiUrl: "http://localhost:4000",
    }),
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all",
        },
      },
    },
  },
};
