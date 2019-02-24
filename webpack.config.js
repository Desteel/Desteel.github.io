const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const pug = require('./webpack_config/pug');
const devserver = require('./webpack_config/devserver');
const css = require('./webpack_config/css');
const extractCSS = require('./webpack_config/css.extract');
const babel = require('./webpack_config/babel');
const files = require('./webpack_config/files');
const fonts = require('./webpack_config/fonts');

const PATHS = {
	source: path.join(__dirname, 'AddressBook/src'),
    build: path.join(__dirname, 'AddressBook/dist')
};

const _common = merge([
    {
		mode: 'production',
        entry: {
			'index': `${PATHS.source}/index.js`,
		},
        output: {
			path: PATHS.build,
			filename: '[name].js',		
			libraryTarget: 'umd',
			library: '[name]',
			umdNamedDefine: true,
			libraryExport: 'default'
		},
		optimization: {
			minimizer: [new UglifyJsPlugin({
				exclude: /\/custom/,
				uglifyOptions: {
					output: {
						comments: false,
					},
				},
			})],
			splitChunks: {
				cacheGroups: {
					commons: {
						minChunks: 2,
						name: 'common',
						chunks: 'all',
            			enforce: true
					}
				}
			}
		},
		externals: {
			jquery: '$'
		},
        plugins: [
			new HtmlWebpackPlugin({
				favicon: `${PATHS.source}/favicon.ico`,
				filename: 'index.html',
				chunks: ['index', 'common'],
				template: `${PATHS.source}/index.pug`,
			}),	
			
			new webpack.ProvidePlugin({
				$: 'jquery',	 
				jQuery: 'jquery',
				React: 'react',
				ReactDOM: 'react-dom',
				styled: 'styled-components'
			}),
		],
	},	
    pug(),
	files(),
	fonts(),
	babel()
]);


module.exports = (env, argv) => {
	if (argv.mode === 'production') {		
		return merge([
			_common,
			extractCSS()
		]);
	} 
	if (argv.mode === 'development') {
        return merge([
            _common,
            devserver(),
			css()
        ]);
    }
};

