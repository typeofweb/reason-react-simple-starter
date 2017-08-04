module.exports = function(env = 'dev') {
  return require(`./webpack/webpack.${env}.js`)
};
