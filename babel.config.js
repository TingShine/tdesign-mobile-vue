module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: [
            'last 3 Chrome versions',
            'last 3 Firefox versions',
            'Safari >= 10',
            'Explorer >= 11',
            'Edge >= 12',
          ],
        },
        modules: false,
      },
    ],
  ],
  plugins: ['@babel/plugin-proposal-class-properties'],
};
