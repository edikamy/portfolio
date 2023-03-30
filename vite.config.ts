import react from '@vitejs/plugin-react'
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio/',
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    ViteImageOptimizer({
      png: { quality: 70, compressionLevel: 9 },
      jpeg: { quality: 70, compressionLevel: 9 },
      jpg: { quality: 70, compressionLevel: 9 },
      gif: { quality: 70, compressionLevel: 9 },
      svg: { quality: 70, compressionLevel: 9 },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          threeJs: ['@react-three/drei', '@react-three/fiber', 'three', 'react-tilt'],
        },
        minifyInternalExports: true,
        compact: true,
        chunkFileNames(chunkInfo) {
          return `Kambiz-Chunk-${chunkInfo.name}.js`
        },
      },
    },
  },
})
