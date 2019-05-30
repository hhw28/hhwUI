const path = require("path");

module.exports = {
  entry: {
    index: "./lib/index.tsx"
  },
  output: {
    // filename: 'bundle.js', // 打包后文件名，用hash区别文件名"bundle.[hash:8].js"
    path: path.resolve(__dirname, "dist/lib"), // 打包后文件路径，绝对路径
    library: "hhwUI",
    libraryTarget: "umd"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.svg$/,
        loader: "svg-sprite-loader"
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: "style-loader", // style-loader 把 css 插入到head标签中
            options: {
              insertAt: "top" // style标签内样式放在最上面
            }
          },
          // "postcss-loader",
          "css-loader", // css-loader 解析 @import 这个语法
          "sass-loader"
        ]
      },
      {
        test: /\.(gif|jpg|jpeg|png)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 1024,
              name: "[name]-test.[ext]"
            }
          }
        ]
      }
    ]
  }
};
