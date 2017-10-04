const image = require('./image');
const javascript = require('./javascript');
const fonts = require('./fonts');
const styles = require('./styles');
const csv = require('./csv');

module.exports = ({ production = false, browser = false } = {}) => (
  [
    fonts(),
    csv(),
    image(),
    javascript({ production, browser }),
    styles({ production, browser })
  ]
);
