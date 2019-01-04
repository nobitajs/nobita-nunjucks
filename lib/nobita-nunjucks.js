const Nunjucks = require('nunjucks');
const Path =  require('path');

module.exports = config => {
  if (config.temp) {
    const { path = '../view', option = {} } = config.temp;
    const src = Path.resolve(config.cwd, path);
    const nunjucks = Nunjucks.configure(src, option);
    return nunjucks;
  }
  
};