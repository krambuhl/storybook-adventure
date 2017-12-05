
import { storiesOf } from '@storybook/vue'
import ActionButton from './ActionButton'

storiesOf('Actions/ActionButton', module)
  .add('Primary button (default)', (h) => (
    <ActionButton>Lorem Ipsum</ActionButton>
  ))
  .add('Secondary button', (h) => (
    <ActionButton variant="secondary">Lorem Ipsum</ActionButton>
  ))
  .add('Call-to-action button', (h) => (
    <ActionButton variant="cta" href="#">Lorem Ipsum</ActionButton>
  ))
