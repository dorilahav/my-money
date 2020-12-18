module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        targets: '> 0.25%, not dead',
        corejs: {version: 3, proposals: true}
      }
    ],
    '@babel/preset-typescript'
  ]
}