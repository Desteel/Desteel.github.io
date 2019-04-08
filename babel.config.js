module.exports = function(api) {
    api.cache(true);
    const presets = [
        [
            '@babel/preset-env',
            {
                modules: false,
                useBuiltIns: 'usage',
                forceAllTransforms: true
            }
        ],
        ['@babel/preset-typescript'],
        ['@babel/preset-react']
    ];
    const plugins = [
        [
            '@babel/plugin-transform-runtime',
            {
                corejs: 2,
                helpers: true,
                regenerator: true,
                useESModules: false
            }
        ],
        [
            '@babel/plugin-proposal-decorators',
            {
                legacy: true
            }
        ],
        [
            '@babel/plugin-proposal-class-properties',
            {
                loose: true
            }
        ],
        ['babel-plugin-styled-components']
        //,["react-hot-loader/babel"]
    ];
    return {
        presets,
        plugins
    };
};
