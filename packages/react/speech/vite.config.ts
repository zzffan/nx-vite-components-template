/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import * as path from 'path';
// import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
// import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import { fileURLToPath } from 'node:url';
import { glob } from 'glob';

export default defineConfig(() => ({
    root: __dirname,
    cacheDir: '../../../node_modules/.vite/packages/react/speech',
    plugins: [
        react(),
        // nxViteTsPaths(),
        // nxCopyAssetsPlugin(['*.md']),
        libInjectCss(),
        dts({
            entryRoot: 'src',
            tsconfigPath: path.join(__dirname, 'tsconfig.lib.json'),
        }),
    ],
    // Uncomment this if you are using workers.
    // worker: {
    //  plugins: [ nxViteTsPaths() ],
    // },
    // Configuration for building your library.
    // See: https://vitejs.dev/guide/build.html#library-mode
    build: {
        target: 'modules',
        outDir: 'es',
        minify: false,
        emptyOutDir: true,
        reportCompressedSize: true,
        commonjsOptions: {
            transformMixedEsModules: true,
        },
        copyPublicDir: false,
        lib: {
            // Could also be a dictionary or array of multiple entry points.
            entry: 'src/index.ts',
            // name: 'speech',
            fileName: (format) => `speechCom.${format}.js`,
            // formats: ['es', 'cjs'],
            // Change this to the formats you want to support.
            // Don't forget to update your package.json as well.
            formats: ['es'],
            // fileName: (format) => `index.${format}.js`,
            // formats: ['es', 'cjs', 'umd']
        },
        rollupOptions: {
            // External packages that should not be bundled into your library.
            external: ['react', 'react-dom', 'react/jsx-runtime', 'antd'],
            input: Object.fromEntries(
                glob
                    .sync('src/**/*.{ts,tsx}', {
                        ignore: ['src/**/*.d.ts'],
                    })
                    .map((file) => [
                        // The name of the entry point
                        // lib/nested/foo.ts becomes nested/foo
                        path.relative(
                            'src',
                            file.slice(
                                0,
                                file.length - path.extname(file).length
                            )
                        ),
                        // The absolute path to the entry file
                        // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
                        fileURLToPath(new URL(file, import.meta.url)),
                    ])
            ),
            output: {
                assetFileNames: 'assets/[name][extname]',
                entryFileNames: '[name].js',
                globals: {
                    react: 'React',
                    'react-dom': 'React-dom',
                    'react/jsx-runtime': 'react/jsx-runtime',
                }
            },
            // input: ['src/index.ts'],
            // output: [
            //     {
            //         format: 'es',
            //         // entryFileNames: '[name].js',
            //         // preserveModules: true,
            //         // preserveModulesRoot: 'src',
            //         assetFileNames: 'assets/[name][extname]',
            //         entryFileNames: '[name].js',
            //         dir: 'es',
            //     },
            //     {
            //         format: 'cjs',
            //         // entryFileNames: '[name].js',
            //         // exports: 'named',
            //         // preserveModules: true,
            //         // preserveModulesRoot: 'src',
            //         assetFileNames: 'assets/[name][extname]',
            //         entryFileNames: '[name].js',
            //         dir: 'lib',
            //     },
            // ],
        },
    },
}));
