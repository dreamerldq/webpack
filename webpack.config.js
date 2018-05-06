const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "public/index.html"),
    filename: "./index.html"
});
module.exports = {
    entry: path.join(__dirname, "src/index.tsx"),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [
                    {loader: 'babel-loader'}
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(ts|tsx)$/,
                use: [
                    { loader: 'babel-loader' },
                    { loader: 'ts-loader' }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    { loader: 'style-loader'},
                    {loader: 'typings-for-css-modules-loader',
                    options: {
                        modules: true,
                        namedExport: true,
                        camelCase: true,
                        minimize: true,
                        localIdentName: "[local]_[hash:base64:5]"
                    }
                    },
                    { loader: 'less-loader'}
                ]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                    }
                ]
            },
            
        ]
    },
    plugins: [htmlWebpackPlugin],
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", "less", "css"]
    },
    devServer: {
        port: 7000,
        historyApiFallback: true,
    }
};
