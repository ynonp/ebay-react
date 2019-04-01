const webpack = require('webpack');

module.exports = {
  entry: './js/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            'presets': [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }        
      },
      {
        test: require.resolve('react'),
        use: [{
          loader: 'expose-loader',
          options: 'React'
        }]
      },      
      {
        test: require.resolve('react-dom'),
        use: [{
          loader: 'expose-loader',
          options: 'ReactDOM'
        }]
      }      
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
};

