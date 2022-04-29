const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            use: {
              loader: "babel-loader"
              
            }
          }
         
        ]
    },
    resolve: {
      extensions: ['.js','.jsx'],
    },
    plugins: [
      new webpack.ProvidePlugin({
        'React':     'react',
        '$':          'jquery',
        '_':          'lodash',
        'ReactDOM':   'react-dom',
        'cssModule':  'react-css-modules',
        'Promise':    'bluebird'
      })

  ]
};