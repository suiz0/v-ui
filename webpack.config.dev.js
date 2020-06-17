const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const cpWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./src/index.ts",
    mode: "development",
    output: {
        filename: "v-ui.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'build/index.html'),
        port: 3000
    },
    devtool: "inline-source-map",
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