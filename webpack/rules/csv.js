const PATHS = require('../paths');

module.exports = ({ limit = 10000 } = {}) => ({
  test: /\.csv$/,
  loader: 'csv-loader',
  options: {
    name: '[hash].[ext]',
    limit,
    dynamicTyping: true,
    header: true,
    skipEmptyLines: true
  },
  include: PATHS.app
});
