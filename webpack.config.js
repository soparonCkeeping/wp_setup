// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');

const Vendor = ['react', 'react-dom', 'react-redux', 'react-router-dom', 
    'redux', 'redux-thunk', 'popper.js', 'jquery', 'bootstrap', 'axios'
]

const config = {
    entry : {
        bundle: './src/index.js',
        vendor: Vendor
    },

    output : {
        filename : '[name][hash].js',
        path : path.resolve(__dirname, 'dist'),
    },

    module : {
        rules : [
            {
                use : 'babel-loader',
                test : /\.js$/,
                exclude : '/node_modules/'
            },
            {
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    }, 
                    "css-loader"
                ],
                test : /\.css$/
            }
        ]
    },

    plugins : [
        new MiniCssExtractPlugin({
            filename: "styles.css"
        }),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),

        new webpack.ProvidePlugin({
            $: "jquery",
            jquery: "jquery",
            "window.jQuery": "jquery",
            jQuery:"jquery"
        })
    ],

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 4000,
        open: true,
        disableHostCheck: true,
        historyApiFallback: true,
        overlay: true,
        stats: 'minimal',
        inline: true,
        compress: true,
    },

    optimization: {
        splitChunks: {
          chunks: 'async',
          minSize: 20000,
          minRemainingSize: 0,
          minChunks: 1,
          maxAsyncRequests: 30,
          maxInitialRequests: 30,
          enforceSizeThreshold: 50000,
          cacheGroups: {
            defaultVendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10,
              reuseExistingChunk: true,
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true,
            },
          },
        },
      }
}

module.exports = config