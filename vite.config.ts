import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import { fileURLToPath } from 'url'
<<<<<<< HEAD
=======
import mdPlugin, { Mode } from 'vite-plugin-markdown'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
>>>>>>> 08da6dc (Enhance Solutions page with interactive design, detailed solution previews, and improved user experience)

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          'babel-plugin-macros', 
          'babel-plugin-styled-components',
<<<<<<< HEAD
          ['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }]
        ],
      },
      fastRefresh: true,
    })
  ],
=======
          ['@babel/plugin-transform-react-jsx', { 
            runtime: 'automatic',
            importSource: '@emotion/react'
          }]
        ],
      },
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
>>>>>>> 08da6dc (Enhance Solutions page with interactive design, detailed solution previews, and improved user experience)
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
<<<<<<< HEAD
      'Content-Security-Policy': "default-src 'self' data: blob:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://unpkg.com; style-src 'self' 'unsafe-inline'; img-src * data: blob:; connect-src *; font-src *;"
=======
      'Content-Security-Policy': "default-src 'self' data: blob:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://unpkg.com 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src * data: blob:; connect-src *; font-src *;"
>>>>>>> 08da6dc (Enhance Solutions page with interactive design, detailed solution previews, and improved user experience)
    }
  },
  build: {
    outDir: 'dist',
  }
})