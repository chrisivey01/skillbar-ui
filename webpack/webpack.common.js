const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
module.exports = {
    entry: "./src/index.tsx",
    target: "web",
    module: {
        rules: [
            {
                test: /\.(ts)x?$/,
                use: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "file-loader",
                options: {
                    name: "/assets/[name].[ext]",
                },
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        fallback: {
            path: false,
            util: false,
            os: false,
            assert: false,
            fs: false,
        },
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            inject: true,
            minify: false,
        }),
        new webpack.ProvidePlugin({
            process: "process/browser",
            Buffer: "buffer",
        }),
    ],
};