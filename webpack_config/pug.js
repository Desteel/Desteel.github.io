/* main */
module.exports = function() {
    return {
        module: {
            rules: [
                {
                    test: /\.pug$/,
                    use: [
                        // html loader gets webpack to process <img> src
                        "html-loader",
                        // requires pretty option otherwise some spacing between elements is lost
                        'pug-html-loader?{"pretty":true,"exports":false}'
                    ]
                }
            ]
        }
    };
};
