export default {
  stories: 'src/**/*.stories.{tsx,jsx}',
  addons: {
    control: {
      enabled: true,
    },
    width: {
      enabled: true,
      options: {
        xsmall: 414,
        small: 640,
        medium: 768,
        large: 1024,
        xlarge: 1280,
      },
      defaultState: 0,
    },
  },
};
