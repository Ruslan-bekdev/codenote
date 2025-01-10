import { defineConfig } from 'vite';

export default defineConfig({
    root: './',
    base: 'https://ruslan-bekdev.github.io/codenote/',
    build: {
        outDir: 'dist',
        sourcemap: true,
    },
    server: {
        port: 3000,
    },
});