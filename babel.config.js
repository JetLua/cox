module.exports = {
  presets: ['@babel/env', '@babel/typescript'],
  plugins: [
    '@babel/proposal-class-properties',
    '@babel/transform-typescript',
    ['@babel/transform-runtime', {
      corejs: 3,
      helpers: false,
      regenerator: true,
      useESModules: true
    }]
  ]
}
