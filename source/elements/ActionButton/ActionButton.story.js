import { storiesOf } from '@storybook/vue'
import Centered from '@storybook/addon-centered'
import { action } from '@storybook/addon-actions'

import {
  withKnobs,
  text,
  select
} from '@storybook/addon-knobs'

import ActionButton from './ActionButton'

// Define story collection
const stories =
  storiesOf('Elements/ActionButton', module)
    .addDecorator(withKnobs)
    .addDecorator(Centered)

// Add dynamic knoby component
stories.add('<ActionButton>', () => {
  const variant = select('Variant', ['primary', 'secondary', 'cta'], 'primary')
  const href = text('Href', 'http://google.com')
  const content = text('Content', 'Go to this place')

  return {
    components: {
      ActionButton
    },
    methods: {
      onClick ($ev) {
        action('@click')($ev)
      }
    },
    template: `
      <ActionButton
        variant="${variant}"
        href="${href}"
        @click="onClick"
      >
        ${content}
      </ActionButton>
    `
  }
})

// Add predefined components
stories
  .add('Primary', () => ({
    render: (h) => (
      <ActionButton>Lorem Ipsum</ActionButton>
    )
  }))
  .add('Secondary', () => ({
    render: (h) => (
      <ActionButton variant="secondary">Lorem Ipsum</ActionButton>
    )
  }))
  .add('Call-to-action', () => ({
    render: (h) => (
      <ActionButton variant="cta" href="#">Lorem Ipsum</ActionButton>
    )
  }))
