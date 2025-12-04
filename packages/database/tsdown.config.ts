import { defineConfig } from 'tsdown';

export default defineConfig({
    entry: ['index.ts'],
    format: ['esm'],
    dts: false,
    sourcemap: true,
    clean: true,
    outDir: 'dist',
    target: 'es2020',
    unbundle: false,
    skipNodeModulesBundle: false,
    noExternal: [/^.*/],
    minify: false,
    tsconfig: '../../tsconfig.json',
    platform: 'node',
    inputOptions(inputOptions) {
        inputOptions.resolve = {
            ...inputOptions.resolve,
            mainFields: ['module', 'main'],
        };
        return inputOptions;
    },
});
