module.exports = function(api) {
    api.cache(true);
    const presets = [
        [
            "@babel/preset-env",
            {
                modules: false,
                useBuiltIns: "usage",
                forceAllTransforms: true
            }
        ],
        ["@babel/preset-react"]
    ];
    const plugins = [
        [
            "@babel/plugin-transform-runtime",
            {
                corejs: 2,
                helpers: true,
                regenerator: true,
                useESModules: false
            }
        ],
        //["react-hot-loader/babel"]
    ];
    return {
        presets,
        plugins
    };
};
