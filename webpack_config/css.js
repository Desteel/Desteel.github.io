module.exports = function(paths) {
    return {
        module: {
            rules: [
                {
                    test: /\.(css|scss)$/,
                    include: paths,
                    use: [
                        "style-loader",
                        {
                            loader: "css-loader",
                            // options: {
                            //     modules: true,
                            // }
                        },
                        "postcss-loader",
                        "sass-loader"
                    ]
                }
            ]
        }
    };
};
