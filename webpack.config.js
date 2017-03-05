var path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve("./build"),
        filename: "bundle.js"
    },
    devServer: {
        port: 8081,
        inline: true,
        contentBase: "./build"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015", "react"]
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(woff|woff2|eot|svg|ttf)$/,
                loader: "url-loader"
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                loader: "url-loader"
            }

        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./src/index.html",
            inject: "body"
        })
    ]
};