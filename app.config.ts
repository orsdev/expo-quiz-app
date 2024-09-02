import { ExpoConfig, ConfigContext } from 'expo/config';


export default ({ config }: ConfigContext): ExpoConfig => ({
    ...config,
    name: 'duolingo',
    slug: 'duolingo',
    extra: {
      storybookEnabled: process.env.STORYBOOK == '1',
    },
  });