var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "index.html",
    inject: "body"
});

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            { test: /\.tsx$/, use: "awesome-typescript-loader" },
            { test: /\.js$/, enforce: "pre", use: "source-map-loader" }
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig
    ]
};