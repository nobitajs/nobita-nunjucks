const Nunjucks = require('nunjucks');

module.exports = config => {
  const nunjucks = new Nunjucks.Environment(new Nunjucks.FileSystemLoader(config.temp.path), config.temp.opt);
  return nunjucks;
};