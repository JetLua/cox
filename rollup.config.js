import babel from 'rollup-plugin-babel'
// import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: './src/index.ts',
  plugins: [

    resolve({
      extensions: ['.ts']
    }),
    babel({
      extensions: ['.ts'],
      include: ['src/**/*']
    }),
  ],
  output: [
    {
      file: 'dist/fx.es.js',
      format: 'es',
      sourcemap: true
    },
    {
      file: 'dist/fx.min.js',
      format: 'umd',
      name: 'fx',
      sourcemap: true
    }
  ]
}
