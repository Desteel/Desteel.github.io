module.exports = function() {
    return {
        module: {
            rules: [
                {
                    test: /\.(jpg|png|svg|gif|ico)$/,
                    loader: "file-loader",
                    options: {
                        name: "assets/images/[name].[ext]"
                    }
                },
                {
                    test: /\.(mov|mp4)$/,
                    loader: "file-loader",
                    options: {
                        name: "assets/video/[name].[ext]"
                    }
                }
            ]
        }
    };
};
