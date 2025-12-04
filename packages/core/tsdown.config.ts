import { defineConfig } from 'tsdown';

export default defineConfig({
    entry: [
        'src/index.ts',
        'src/app.ts',
        'src/types/index.ts',
        'src/utils/index.ts',
        'src/utils/usage-metadata-parser.ts',
    ],
    format: ['esm'],
    dts: true,
    sourcemap: true,
    clean: true,
    outDir: 'dist',
    target: 'es2020',
    unbundle: false,
    skipNodeModulesBundle: false,
    noExternal: [/^.*/],
    external: ['@vercel/functions'],
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
