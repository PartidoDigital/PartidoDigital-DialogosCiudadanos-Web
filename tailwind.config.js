const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ["./docs/**/*.html"],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'a:not(.text-white)': {
              color: theme('colors.orange.500'),
            },
            'a.text-white': {
              color: theme('colors.white')
            },
          },
        },
      }),
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        orange: {
          "100": "#ffd8a7",
          "300": "#fe8c00",
          "500": "#ee7211",
          "700": "#f83600",
          "900": "#e06c02"
        }
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/ui'),
    require('@tailwindcss/typography'),
  ],
};
