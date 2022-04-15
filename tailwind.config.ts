import { defineConfig } from 'windicss/helpers'
import AspectRatio from 'windicss/plugin/aspect-ratio'

export default defineConfig({
  darkMode: 'class',
  theme: {
    screens: {
      iphone6: '375px',
      print: { raw: 'print' }
    }
  },
  extract: {
    include: ['index.html', 'src/**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git']
  },
  plugins: [AspectRatio]
})
