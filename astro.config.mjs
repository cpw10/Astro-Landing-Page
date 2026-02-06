import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@astrojs/mdx'
import editableRegions from '@cloudcannon/editable-regions/astro-integration'

export default defineConfig({
  integrations: [
    mdx(),
    editableRegions()
  ],
  vite: {
    plugins: [tailwindcss()]
  }
})