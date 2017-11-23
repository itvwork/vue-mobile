var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
module.exports = {
    "resolve": {
        "extensions": [
            ".ts",
            ".js",
            ".vue"
        ],
        "modules": [
            "./node_modules"
        ],
        "symlinks": true
    },
    entry: {
        index: './src/web.js',
        vendor: ['babel-polyfill', './src/vender/iscroll-probe']
    },
    output: {
        filename: '[name].js',
        publicPath: '/style/mobile/js/',
        path: path.resolve(__dirname, 'dist/style/mobile/js/')

    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
            }, {
                test: /\.css$/,
                loader: 'css-loader'

            }, {
                test: /\.js/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
                query: {
                    presets: ['es2015', 'stage-3']
                }
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
                // loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader',
                query: {
                    // 把较小的图片转换成base64的字符串内嵌在生成的js文件里
                    limit: 100000,
                    // 路径要与当前配置文件下的publicPath相结合
                    name: 'fonts/[name].[ext]?[hash:7]'
                }
            },
            {
                test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
                loader: 'url-loader',
                options: {
                    // 把较小的图标转换成base64的字符串内嵌在生成的js文件里
                    limit: 100000,
                    name: 'fonts/[name].[ext]?[hash:7]',
                    prefix: 'font'
                }
            }
        ]
    },
    plugins: [
      
        new webpack.NoEmitOnErrorsPlugin(),
     
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function () {
                    return [
                        require("autoprefixer")({
                            browsers: ['ie>=8', '>1% in CN']
                        })
                    ]
                }
            }
        })
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         NODE_ENV: 'production',

        //     }
        // })
    ]

}