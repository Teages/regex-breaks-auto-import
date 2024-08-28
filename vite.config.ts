import { defineConfig } from 'vite'
import Unimport from 'unimport/unplugin'

export default defineConfig({
  plugins: [
    Unimport.vite({
      imports: [{ name: 'logSomething', from: './utils/some.ts' }],
      dts: './src/unimport.d.ts',
    }),
  ],
})
