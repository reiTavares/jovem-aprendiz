import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Vite automatically loads VITE_ prefixed variables from .env files
  // and makes them available via import.meta.env.
  // No explicit 'define' block is needed here for that purpose.
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
