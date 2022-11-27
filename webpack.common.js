const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry: {
        app: "./src/index.tsx",
        vendorStyles: ['./node_modules/bootstrap/dist/css/bootstrap.css'],

    },
    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    },
    module: {
        rules: [
            {
                test: /\.(js|tsx|ts)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options: {
                        modules: true,
                    },
                }, "sass-loader"],
            },
            {
                test: /\.(png|jpg)$/,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html', //Name of file in ./dist/
            template: "./src/index.html", //Name of template in ./src
            scriptLoading: 'blocking', // Just use the blocking approach (no modern defer or module)
            hash: true
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "[id].css",
        }),
    ]
};