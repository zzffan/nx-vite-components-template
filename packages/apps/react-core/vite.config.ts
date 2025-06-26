/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';
import path from 'path';
console.log(__dirname);
console.log(path.resolve('src/app/'));
export default defineConfig(() => ({
    root: __dirname,
    cacheDir: '../../../node_modules/.vite/packages/apps/react-core',
    server: {
        port: 4200,
        host: 'localhost',
        proxy: {
            '/api': {
                target: 'https://qasandbox.bcetest.baidu.com/',
                changeOrigin: true,
                secure: false,
            },
        },
    },
    preview: {
        port: 4300,
        host: 'localhost',
    },
    plugins: [react(), nxViteTsPaths(), nxCopyAssetsPlugin(['*.md'])],
    // Uncomment this if you are using workers.
    // worker: {
    //  plugins: [ nxViteTsPaths() ],
    // },
    build: {
        outDir: '../../../dist/packages/apps/react-core',
        emptyOutDir: true,
        reportCompressedSize: true,
        commonjsOptions: {
            transformMixedEsModules: true,
        },
    },
    test: {
        watch: false,
        globals: true,
        environment: 'jsdom',
        include: [
            '{src,tests}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
        ],
        reporters: ['default'],
        coverage: {
            reportsDirectory: '../../../coverage/packages/apps/react-core',
            provider: 'v8' as const,
        },
    },
}));
