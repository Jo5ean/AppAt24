import path from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
const config = {
  plugins: [
    react(),
  ],
  server: {
    watch: {
      usePolling: true
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
};
export default defineConfig(config)
