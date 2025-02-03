import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdPlugin from 'vite-plugin-markdown'
import { Mode } from 'vite-plugin-markdown'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          'babel-plugin-macros', 
          'babel-plugin-styled-components',
          ['@babel/plugin-transform-react-jsx', { 
            runtime: 'automatic',
            importSource: '@emotion/react'
          }]
        ],
      }
    }),
    mdPlugin({
      mode: [Mode.HTML, Mode.REACT]
    })
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer
      ]
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom', 
      'framer-motion', 
      'react-icons',
      'react-intersection-observer'
    ]
  },
  root: __dirname,
  server: {
    port: 3000,
    host: '127.0.0.1',
    open: true,
    headers: {
      'Content-Security-Policy': "default-src 'self' data: blob:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://unpkg.com 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src * data: blob:; connect-src *; font-src *;"
    }
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  }
})