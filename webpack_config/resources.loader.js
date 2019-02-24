var path = require('path');

module.exports = function(paths) {
    return {
        module: {
  rules: [
    // Apply loader
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
        {
          loader: 'sass-resources-loader',
          options: {
            resources: [
                path.resolve(__dirname, '../node_modules/compass-mixins/lib/mixins.scss')
                
              ],
          },
        },
      ],
    },
  ],
},
    };
};