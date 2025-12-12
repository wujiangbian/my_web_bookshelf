// vue.config.js
module.exports = {
  publicPath:  process.env.NODE_ENV === 'production'
      ? '/my_web_bookshelf/'
      :'/',
  productionSourceMap: false,
  devServer: {
    port: 8081
  }
};
