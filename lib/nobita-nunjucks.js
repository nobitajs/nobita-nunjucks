const Nunjucks = require('nunjucks');
const path =  require('path');

module.exports = config => {
  if (config.temp) {
    config.temp.path = config.temp.path || '../view';
    const src = path.resolve(config.cwd, config.temp.path);
    const nunjucks = new Nunjucks.Environment(new Nunjucks.FileSystemLoader(src));
    return nunjucks;
  }
  
};