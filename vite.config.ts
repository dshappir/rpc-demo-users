import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        port: 5173,
        proxy: {
            '/api/rpc': {
                target: 'http://localhost:3000',
                changeOrigin: true,
            },
        },
    },
    build: {
        rollupOptions: {
            external: (id) => {
                // Exclude server code from the bundle (only runtime imports, type imports are already stripped)
                if (id.includes('/src/server/') || id.includes('\\src\\server\\')) {
                    return true;
                }
                return false;
            },
        },
    },
    optimizeDeps: {
        exclude: ['src/server'],
    },
});
