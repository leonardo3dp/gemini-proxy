import { defineConfig } from 'tsdown';

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['esm'],
    dts: false,
    sourcemap: true,
    clean: true,
    outDir: 'dist',
    target: 'es2022',
    unbundle: false,
    skipNodeModulesBundle: true,
    // Keep database package external so its SQL assets remain available at runtime
    external: ['@lehuygiang28/gemini-proxy-db'],
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
