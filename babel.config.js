module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        root: ['./app'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json','cjs'],
        alias: {
          '@svgs': './app/svgs',
          tests: 'tests/*',
          '@components': './app/components',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ]
};
