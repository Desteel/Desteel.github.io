module.exports = function() {
    return {
        module: {
            rules: [
                {
                    test: /\.(eot|woff|woff2|ttf|otf)([\?]?.*)$/,
                    loader: "file-loader",
                    options: {
                        name: "assets/fonts/[name].[ext]"
                    }
                }
            ]
        }
    };
};
