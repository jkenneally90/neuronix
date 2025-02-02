import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
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
          ['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }]
        ],
      },
      fastRefresh: true,
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-icons/fi']
  },
  root: __dirname,
  server: {
    port: 3001,
    host: '127.0.0.1',
    open: true,
    headers: {
      'Content-Security-Policy': "default-src 'self' data: blob:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://unpkg.com; style-src 'self' 'unsafe-inline'; img-src * data: blob:; connect-src *; font-src *;"
    }
  },
  build: {
    outDir: 'dist',
  }
})