var path = require('path');

module.exports = function(paths) {
    return {
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    include: paths,					
					loader: "style-loader!raw-loader!css-loader!postcss-loader!sass-loader?includePaths[]=" + path.resolve(__dirname, "../node_modules/compass-mixins/lib")
                }
            ]
        }
    };
};