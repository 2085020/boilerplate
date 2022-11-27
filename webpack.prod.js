const { merge } = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common.js");
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "js/[name].[chunkhash].js",
        assetModuleFilename: "images/[hash][ext][query]",
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'all',
                    name: (module) => {
                        const packageName = module.context.match(
                            /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                        )[1];
                        // npm package names are URL-safe, but some servers don't like @ symbols
                        return `vendor/${packageName.replace("@", "")}`;
                    },
                    test: /[\\/]node_modules[\\/]/,
                    enforce: true,
                },
            },
        },
    },
    plugins: [
        new Dotenv({
            path: './prod.env',
        })
    ],
});