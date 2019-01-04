const Nunjucks = require('nunjucks');
const Path = require('path');
const requireJs = require('nobita-require');

module.exports = config => {
  const filter = requireJs('./app/extend/filter.js');
  
  if (config.temp) {
    const { path = '../view', option = {} } = config.temp;
    const src = Path.resolve(config.cwd, path);
    const nunjucks = Nunjucks.configure(src, option);
    for (const key in filter) {
      nunjucks.addFilter(`${key}`, filter[key]);
    }

    return nunjucks;
  }

};