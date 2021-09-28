module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        root: ['./'],
        alias: {
          '@assets': './assets',
          '@components': './components',
          '@screens': './screens',
          '@constants': './constants',
          '@mocks': './mocks',
          '@routes': './routes',
          '@globalTypes': './globalTypes',
          '@decorators': './storybook/decorators',
        },
      },
    ],
  ],
};
