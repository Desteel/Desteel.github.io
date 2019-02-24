const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function() {
    return {
        plugins: [
            new MiniCssExtractPlugin({
                //filename: "main.css",
                chunkFilename: "main.css"
            })
        ],
        module: {
            rules: [
                {
                    test: /\.(scss|css)$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                publicPath: "../../"
                            }
                        },
                        {
                            loader: "css-loader",
                            options: {
                                importLoaders: 1,
                                url: true
                            }
                        },
                        {
                            loader: "postcss-loader"
                        },
                        {
                            loader: "sass-loader"
                        }
                    ]
                }
            ]
        }
    };
};
