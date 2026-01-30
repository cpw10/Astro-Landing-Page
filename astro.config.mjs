import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@astrojs/mdx'
import bookshop from '@bookshop/astro-bookshop'

export default defineConfig({
  integrations: [
    mdx(),
    bookshop()
  ],
  vite: {
    plugins: [tailwindcss()]
  }
})