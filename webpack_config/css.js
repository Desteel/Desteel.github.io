module.exports = function(paths) {
    return {
        module: {
            rules: [
                {
                    test: /\.(css|scss)$/,
                    include: paths,
                    use: [
                        "style-loader",
                        "css-loader",
                        "postcss-loader",
                        "sass-loader"
                    ]
                }
            ]
        }
    };
};
