import ts from '@rollup/plugin-typescript'

export default {
  input: './src/index.ts',
  plugins: [
    ts()
  ],
  output: {
    format: 'es',
    sourcemap: true,
    file: 'dist/cox.es.js'
  }
}
