/* eslint-disable @typescript-eslint/no-var-requires */
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "production",
    devtool: "inline-source-map",
    plugins: [
        new CleanWebpackPlugin(),
        // new CopyPlugin({
        //     patterns: [
        //         { from: "src/assets/images", to: "assets" },
        //     ],
        // }),
    ],
    output: {
        filename: "js/[name].bundle.js",
        // path: path.resolve(__dirname, "..", "./html"),
        path: "C:/FXServer/server-data/resources/pma-skillbar/dist/html/",
    },
});