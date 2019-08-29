const base = require("./webpack.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = Object.assign({}, base, {
  mode: "development",
  entry: {
    example: "./example.tsx"
  },
  devServer: {   
    port: 9090,  
    open: true,  
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "example.html"
    })
  ]
});
