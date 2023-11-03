import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'vite-plugin-env-compatible';

export default defineConfig({
  plugins: [react(), dotenv()],
});
