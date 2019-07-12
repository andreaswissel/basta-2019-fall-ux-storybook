import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import markdownNotes from './testnotes.md';

import { Welcome, Button } from '@storybook/angular/demo';
import {withScreenshot} from 'storybook-chrome-screenshot';

storiesOf('Welcome', module).add('to Storybook', () => ({
  component: Welcome,
  props: {},
}));

storiesOf('Button', module)
  .add('with text', withScreenshot()(() => ({
    component: Button,
    props: {
      text: 'Hello Button',
    },
  })))
  .add(
    'with some emoji',
    () => ({
      component: Button,
      props: {
        text: '😀 😎 👍 💯',
      },
    }),
    { notes: { markdown: markdownNotes } }
  )
  .add(
    'with some emoji and action',
    withScreenshot()(
    () => ({
      component: Button,
      props: {
        text: '😀 😎 👍 💯',
        onClick: action('This was clicked OMG'),
      },
    })),
    { notes: 'My notes on a button with emojis' }
  );

storiesOf('Another Button', module).add('button with link to another story', () => ({
  component: Button,
  props: {
    text: 'Go to Welcome Story',
    onClick: linkTo('Welcome'),
  },
}));
