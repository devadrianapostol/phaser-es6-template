module.exports = {
  entry: "./src/game.jsx",
  output: {
    filename: 'game.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel'
      }
    ]
  }
};
