import { configure, addDecorator } from '@storybook/angular';
import {withA11y} from "@storybook/addon-a11y";
import {initScreenshot} from "storybook-chrome-screenshot";

// automatically import all files ending in *.stories.ts
const req = require.context('../src', true, /\.stories\.ts$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(withA11y);
addDecorator(initScreenshot());

configure(loadStories, module);
