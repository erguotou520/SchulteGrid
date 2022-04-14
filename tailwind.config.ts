import { defineConfig } from 'windicss/helpers'
import AspectRatio from 'windicss/plugin/aspect-ratio'

export default defineConfig({
  darkMode: 'class',
  theme: {
    screens: {
      print: { raw: 'print' }
    }
  },
  extract: {
    include: ['index.html', 'src/**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git']
  },
  plugins: [AspectRatio]
})
