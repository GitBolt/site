module.exports = {
    content: [
      "./pages/**/*.tsx",
      "./components/**/*.tsx",
    ],
    theme: {
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.5rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        "8xl": "6rem",
        "9xl": "8rem"
      },
      extend: {
        colors: {
          "head": "#BCC5DC",
          "blue": {
            "1": "#6e77a8",
            "2": "#4567BE",
            "3": "#173EA5",
            "4": "#1C2955"
          }

        }
      },
    },
    plugins: [],
  }