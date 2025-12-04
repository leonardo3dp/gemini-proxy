import { defineConfig } from 'tsdown';

export default defineConfig({
    entry: ['src/main.ts'],
    format: ['esm'],
    dts: false,
    sourcemap: true,
    clean: true,
    outDir: 'dist',
    target: 'es2020',
    unbundle: false,
    skipNodeModulesBundle: false,
    noExternal: ['@gemini-proxy/core'],
    external: ['@vercel/functions', 'node-appwrite'],
    platform: 'node',
    minify: false,
    tsconfig: './tsconfig.json',
    inputOptions(inputOptions) {
        inputOptions.resolve = {
            ...inputOptions.resolve,
            mainFields: ['module', 'main'],
        };
        return inputOptions;
    },
});
