const Nunjucks = require('nunjucks');
const Path = require('path');
const requireJs = require('nobita-require');

module.exports = app => {
  const { config } = app;
  const filter = requireJs('./app/extend/filter.js');
  const { path = './views', option = {} } = config.temp;
  const src = Path.resolve(config.cwd, path);
  const nunjucks = Nunjucks.configure(src, option);
  for (const key in filter) {
    nunjucks.addFilter(`${key}`, filter[key]);
  }
  return nunjucks;
};