import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages（https://<user>.github.io/task-board/）でも動くよう相対パスで出力する
  base: './',
})
