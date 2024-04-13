// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/App.js', // O'zgartiring kerak
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    fallback: {
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify"),
      "util": require.resolve("util/"),
    },
  },
  // Boshqa sozlamalar...
};
