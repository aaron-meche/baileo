const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'docs/scripts/'),
    filename: 'bundle.js',
  },
  watch: true
};