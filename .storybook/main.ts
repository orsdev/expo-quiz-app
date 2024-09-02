import { StorybookConfig } from '@storybook/react-native';
// TODO: I don't know why the stories does not work outside .storybook
const main: StorybookConfig = {
  stories: ['./stories/**/*.stories.?(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/addon-ondevice-controls', 
    '@storybook/addon-ondevice-actions'
  ],
};

export default main;