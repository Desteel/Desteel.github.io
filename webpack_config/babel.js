module.exports = function () {
    return {
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            rootMode: "upward"
                        }
                    }
                },
				{
					test: /.svg$/,
					use: [{
							loader: 'babel-loader',
							options: {
								rootMode: "upward"
							}
						}, {
							loader: '@svgr/webpack',
							options: { 
								babel: false
							},
						}]
				}
            ]
        }
    };    
};
