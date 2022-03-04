module.exports = {
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.ts',
    '../src/**/*.stories.tsx',
  ],
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-actions',
    '@storybook/addon-viewport',
    '@storybook/addon-storysource',
    '@storybook/addon-a11y',
  ],
  presets: ['@storybook/addon-docs/preset'],
}
