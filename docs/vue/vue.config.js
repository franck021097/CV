const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue/' // Cambia 'nombre-repositorio' por el nombre de tu repositorio
    : '/'
})

