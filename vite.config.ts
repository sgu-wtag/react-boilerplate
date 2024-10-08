/// <reference types="vitest" />
import path from 'path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig, loadEnv } from 'vite';
import { sentryVitePlugin } from '@sentry/vite-plugin';
import { MODE_PRODUCTION } from './src/constants/common';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const isProd = mode === MODE_PRODUCTION;
  const plugins = [react()];

  if (isProd) {
    plugins.push(
      sentryVitePlugin({
        org: env.VITE_SENTRY_ORGANIZATION,
        project: env.VITE_SENTRY_PROJECT,
        authToken: env.VITE_SENTRY_AUTH_TOKEN,
        sourcemaps: {
          filesToDeleteAfterUpload: ['**/*.js.map'],
        },
      }),
    );
  }

  return {
    build: {
      sourcemap: true,
    },
    plugins,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: ['./src/testing/setup-tests.ts'],
    },
  };
});
