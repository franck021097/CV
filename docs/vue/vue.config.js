const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})


module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? 'https://franck021097.github.io/' // Cambia 'nombre-repositorio' por el nombre de tu repositorio
    : '/'
}
