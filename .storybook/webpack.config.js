module.exports = {
  module: {
    rules: []
  },
  resolve: {
    extensions: ['.vue', '.js'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      react: 'react'
    }
  }
}
