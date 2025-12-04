import { defineConfig } from 'tsdown';

export default defineConfig({
    entry: ['src/index.ts'],
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
    tsconfig: './tsconfig.json',
    platform: 'browser',
    inputOptions(inputOptions) {
        inputOptions.resolve = {
            ...inputOptions.resolve,
            mainFields: ['browser', 'module', 'main'],
        };
        return inputOptions;
    },
});
