const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    plugins: [
        new UglifyJSPlugin({
            uglifyOptions: {
                ie8: true,
                ecma: 5,
                minimize: true,
                sourceMap: true,
                output: {
                    comments: false,
                    beautify: false,
                },
                warnings: false
            }
        })
    ]
};
