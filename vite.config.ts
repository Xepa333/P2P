import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  // load .env files based on current mode (development / production)
  const env = loadEnv(mode, process.cwd(), '');

  return {
    // ensure all asset URLs are prefixed with /P2P/
    base: '/P2P/',

    // inject your GEMINI_API_KEY into process.env
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
