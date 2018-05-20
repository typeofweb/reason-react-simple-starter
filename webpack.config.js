module.exports = function(env = 'dev') {
  const config = require(`./webpack/webpack.${env}.js`);
  config.mode = (env === 'prod' ? 'production' : 'development');
  return config;
};
