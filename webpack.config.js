var path = require('path');
var webpack = require('webpack');

var isProduction = (function() {
  return process.env.NODE_ENV !== 'deploy';
})();

var entry = './src/App.js';
var plugins = [],
    devtool = null,
    externals = {
      'react': 'react',
      'react-dom': 'react-dom',
      'redux': 'redux',
      'react-redux': 'react-redux'
    };

console.log('is deploy?' + isProduction);
if (isProduction) {
  entry =  [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    entry
  ];
  externals = [];
  devtool = 'eval';
  plugins = [new webpack.HotModuleReplacementPlugin()];
}

module.exports = {
  devtool: isProduction ? 'eval' : null,
  entry: {
    App: entry
  },
  output: {
    path: path.join(__dirname, 'lib'),
    filename: '[name].js',
    library: 'shared-components',
    libraryTarget: 'umd',
    publicPath: '/static/'
  },
  plugins: plugins,
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: [path.join(__dirname, 'src'), path.join(__dirname, 'demo')]
    }
  ]
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.scss', '.jsx']
  },
  externals: externals
};
