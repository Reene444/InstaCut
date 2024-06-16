// https://github.com/vitejs/vite/discussions/3448
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import jsconfigPaths from 'vite-jsconfig-paths';


// ----------------------------------------------------------------------

export default defineConfig({
  plugins: [react(), jsconfigPaths()
  ],
  optimizeDeps: {
    include: ['@ffmpeg/ffmpeg', '@ffmpeg/util'],
  },
  // https://github.com/jpuri/react-draft-wysiwyg/issues/1317
  base: '/', // accessing env variable is not possible here. So hard coding this.
  define: {
    global: 'window'
  },
  resolve: {
    alias: [
      {
        find: /^~(.+)/,
        replacement: path.join(process.cwd(), 'node_modules/$1')
      },
      {
        find: /^src(.+)/,
        replacement: path.join(process.cwd(), 'src/$1')
      }
    ]
  },
  server: {
    // this ensures that the browser opens upon server start
    open: false,
    // this sets a default port to 3000
    port: 80,
    host: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8095',//http://35.224.213.216:8080/
        changeOrigin: true
      }
    }
  },
  preview: {
    // this ensures that the browser opens upon preview start
    open: false,
    // this sets a default port to 3000
    port: 80
  }
});
