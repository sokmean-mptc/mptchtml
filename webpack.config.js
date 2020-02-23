const path = require('path');
const webpack = require('webpack');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: ['./src/js/main.js', './src/sass/main.scss'],
    output: {
        filename: "main.js",
        path: path.resolve( __dirname, "dist" )
    },
    module: {
        rules: [{
            test: /\.(sa|sc|c)ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ]
        },{
            test: /\.(jpe?g|png|gif$)/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[hash].[ext]',
                    outputPath: 'images'
                }
            }]
        },{
            test: /\.(ttf|eot|otf|svg|woff$)/,
            use: [{
                loader: 'file-loader',
                options: {
                    outputPath: 'fonts'
                }
            }]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.css',
            chunkFilename: '[id].css'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new CleanWebpackPlugin(),
        new BrowserSyncPlugin()
    ],
    optimization: {
        minimizer: [
            new TerserJSPlugin(),
            new OptimizeCSSAssetsPlugin()
        ]
    }
}