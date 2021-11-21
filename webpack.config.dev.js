const path = require("path");

module.exports = {
    entry: "./src/index.ts",
    mode: "development",
    output: {
        filename: "v-ui.js",
        path: path.resolve(__dirname, "dist"),
        library: "vui",
        libraryExport: "default",
        publicPath: "/dist"
    },
    devServer: {
        contentBase: path.resolve(__dirname, "./showcase"),
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
    externals: {
        vue: 'Vue'
    }
}