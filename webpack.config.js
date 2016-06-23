var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {filename: 'index.bundle.js', path: './'},
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0'],
          plugins: ['./babelRelayPlugin'].map(require.resolve)
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
