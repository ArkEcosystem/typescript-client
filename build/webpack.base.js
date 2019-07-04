module.exports = (babelOptions = {}) => ({
  mode: 'production',

  context: __dirname,

  node: {
    fs: 'empty',
    net: 'empty'
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', babelOptions]
          ]
        }
      }
    }]
  },

  resolve: {
    extensions: ['.js', '.json']
  }
})
