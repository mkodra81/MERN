import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['dotenv'], 
    },
  },
  base: "./",
  server: {
    proxy: {
      "/api": "https://mern-20xa.onrender.com",
    },
  },
});
