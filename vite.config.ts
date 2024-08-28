import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    AutoImport({
      dirs: ['./src/utils/**'],
      dts: './src/auto-imports.d.ts',
    }),
  ],
})
