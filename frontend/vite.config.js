import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from "vite-plugin-compression";


export default defineConfig({
  plugins: [react(), compression({
    algorithm: "gzip",
    threshold: 10240,
    deleteOriginFile: false,
  })],
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