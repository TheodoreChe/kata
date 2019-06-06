import babel from 'rollup-plugin-babel';
import flow from 'rollup-plugin-flow';
import resolve from 'rollup-plugin-node-resolve';

const plugins = [
  resolve(),
  flow(),
  babel({
    exclude: '**/node_modules/**',
  }),
];

const input = 'src/index.js';
const name = 'kataPackage';

export default [
  {
    input,
    output: {
      name,
      file: 'lib/index.esm.js',
      format: 'esm',
      sourcemap: true,
    },
    plugins,
  },
  {
    input,
    output: {
      name,
      file: 'lib/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    plugins,
  },
];
