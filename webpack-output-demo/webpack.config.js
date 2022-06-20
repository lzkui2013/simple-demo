const path = require("path");

module.exports = {
  mode: "development", // 可以设置为 production
  // 执行的入口文件
  entry: "./src/index.js",
  output: {
    // 输出的文件名
    filename: "[name].js",
    // 输出文件都放在 dist
    path: path.resolve(__dirname, "./output"),
  },
  devtool: false,
};
