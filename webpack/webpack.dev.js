const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    output: {
        filename: "js/[name].bundle.js",
        path: path.resolve(__dirname, "..", "..", "./dist/html"),
        // path: "C:/FXServer/server-data/resources/pma-job-management/dist/html/"
    },
    devServer: {
        contentBase: path.resolve(__dirname, "..", "..", "./dist/html"),
        historyApiFallback: true,
        open: true,
        compress: true,
        hot: true,
        port: 3000,
    },
});