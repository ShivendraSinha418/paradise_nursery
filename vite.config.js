import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Add this line for GitHub Pages
const repoName = 'paradise_nursery';

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`,  // 👈 important!
})
