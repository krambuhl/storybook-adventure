import { storiesOf } from '@storybook/vue'
import Centered from '@storybook/addon-centered'
import { action } from '@storybook/addon-actions'

import {
  withKnobs,
  text,
  select
} from '@storybook/addon-knobs'

import ActionButton from './ActionButton'

const stories =
  storiesOf('Elements/ActionButton', module)
    .addDecorator(withKnobs)
    .addDecorator(Centered)

stories.add('~Knoby ActionButton', () => {
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

stories
  .add('Primary Actionbutton', () => ({
    render: (h) => (
      <ActionButton>Lorem Ipsum</ActionButton>
    )
  }))
  .add('Secondary ActionButton', () => ({
    render: (h) => (
      <ActionButton variant="secondary">Lorem Ipsum</ActionButton>
    )
  }))
  .add('Call-to-action ActionButton', () => ({
    render: (h) => (
      <ActionButton variant="cta" href="#">Lorem Ipsum</ActionButton>
    )
  }))
