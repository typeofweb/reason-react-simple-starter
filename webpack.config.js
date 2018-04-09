module.exports = function(env = 'dev') {
  const config = require(`./webpack/webpack.${env}.js`);
  config.mode = (env === 'production' ? 'production' : 'development');
  return config;
};
