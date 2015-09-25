// require("../stylesheets/index.styl")

module.exports = {

  component(name) {
    return require(`./components/${name}.jsx`)
  },

}
