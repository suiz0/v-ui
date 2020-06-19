const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const cpWebpackPlugin = require("copy-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    entry: "./src/index.ts",
    mode: "production",
    output: {
        filename: "v-ui.js",
        path: path.resolve(__dirname, "dist")
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
    plugins: [
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            template: './public/index.html'
        }),
        new cpWebpackPlugin({
            patterns: [{
                from: "./public/app.js",
                to: "./"
            },
            {
                from: "./public/js/",
                to: "./js/"
            },
            {
                from: "./public/styles/",
                to: "./styles/"
            }
            ]
        })
    ]
}