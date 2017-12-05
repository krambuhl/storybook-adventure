import { configure } from '@storybook/vue'

function loadStories () {
  // You can require as many stories as you need.
  const context = require.context('../source/', true, /(\.story\.js)$/)
  context.keys().forEach(context)
}

configure(loadStories, module)
