import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Deploying to 'https://<USERNAME>.github.io/<REPO>'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/react_practice/',
});
