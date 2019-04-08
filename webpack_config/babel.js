module.exports = function() {
    return {
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx']
        },
        module: {
            rules: [
                {
                    test: [/\.js$/, /\.jsx?$/, /\.ts$/, /\.tsx?$/],
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            rootMode: 'upward'
                        }
                    }
                },
                {
                    test: /.svg$/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                rootMode: 'upward'
                            }
                        },
                        {
                            loader: '@svgr/webpack',
                            options: {
                                babel: false
                            }
                        }
                    ]
                }
            ]
        }
    };
};
