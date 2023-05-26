const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  // ... outras configurações ...

  configureWebpack: {
    plugins: [
      new MiniCssExtractPlugin(),
    ],
  },
};