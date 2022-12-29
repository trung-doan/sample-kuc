const path = require('path');
module.exports = (env = {}) => {
  return {
    entry: {
      "index": './src/index.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].min.js',
    }
  }
}
