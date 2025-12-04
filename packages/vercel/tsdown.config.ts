import { defineConfig } from 'tsdown';

export default defineConfig({
    entry: ['src/index.ts', 'src/route.ts'],
    format: ['esm'],
    dts: true,
    sourcemap: true,
    clean: true,
    outDir: 'dist',
    target: 'es2020',
    unbundle: true,
    skipNodeModulesBundle: true,
    noExternal: [],
    minify: false,
    tsconfig: './tsconfig.json',
    platform: 'node',
    inputOptions(inputOptions) {
        inputOptions.resolve = {
            ...inputOptions.resolve,
            mainFields: ['module', 'main'],
        };
        return inputOptions;
    },
});
