import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "ds-dark1": "#151619",
        "ds-dark2": "#1d1f22",
        "ds-dark3": "#2b2d31",
        "ds=dark4": "#35393f",
        "ds-gray1": "#5a6069",
        "ds-gray2": "#7c8187",
        "ds-gray3": "#c1c4cb",
        "ds-gray4": "#e4e4e4",
        "ds-gray5": "#f5f5f5",
        "ds-primary": "#e46643",
        "ds-primary-hover": "#f39765"
      },
      backgroundImage: {
        
      },
      screens: {
        desktop: "1440px"
      }
    },
  },
  plugins: [],
}
export default config
