const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const webpack = require('webpack');
const package = require("./package.json");

module.exports = {
    entry: "./src/index.ts",
    mode: "production",
    output: {
        filename: "v-ui.js",
        path: path.resolve(__dirname, "dist"),
        library: "vui",
        libraryExport: "default"
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    externals: {
        vue: 'Vue'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.BannerPlugin({
            banner: `[file] v${package.version}\n`
        })
    ]
}