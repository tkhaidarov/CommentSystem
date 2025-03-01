import { defineConfig } from 'vite';

export default defineConfig({
    root: '',
    base: '/CommentSystem/',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
    },
});