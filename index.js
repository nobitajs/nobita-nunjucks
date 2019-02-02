module.exports = app => {
  const { config } = app;
  if (config.temp) {
    const nunjucks = require('./lib/nobita-nunjucks');
    nunjucks(app);
  }
}