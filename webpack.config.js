const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        index: './lib/index.tsx'
    },
    output: {
        // filename: 'bundle.js', // 打包后文件名，用hash区别文件名"bundle.[hash:8].js"
        path: path.resolve(__dirname, 'dist/lib'), // 打包后文件路径，绝对路径
        library: 'hhwUI',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader'
        }]
    }
}