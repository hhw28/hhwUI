const path = require('path')

module.exports = {
    entry: {
        index: './lib/index.tsx'
    },
    output: {
        filename: 'bundle.js', // 打包后文件名，用hash区别文件名"bundle.[hash:8].js"
        path: path.resolve(__dirname, 'dist/lib'), // 打包后文件路径，绝对路径
        library: 'hhwUI',
        libraryTarget: 'umd'
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader'
        }]
    }
}