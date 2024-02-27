const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      Poppins: ['Poppins', 'sans-serif'],



      Pacifico: ['Pacifico', 'cursive'],

    },



    extend: {
      colors: {
        'action1': '#4ba5b4',
        'action2': '#FF674F',
        'notification': '#E9D985',
      },
      dropShadow: {
        'xlb': '0 15px 15px rgba(255, 255, 255, 0.25)',
        'xl': '0 5px 5px rgba(0, 0, 0, 0.484)'

      },
    },

  },
  daisyui: {
    themes: [
      {
        bear: {
          'primary': '#4aa5b4',
          'primary-content': '#ffffff',

          'secondary': '#ff674e',
          'secondary-content': '#82281a',

          'accent': '#37cdbe',
          'accent-content': '#ffffff',

          'neutral': '#655650',
          'neutral-content': '#ffffff',

          'base-100': '#f1efee',
          'base-200': '#dfdedd',
          'base-300': '#b3b5b7',
          'base-content': '#655650',

          'info': '#1c92f2',
          'success': '#009485',
          'warning': '#ff9900',
          'error': '#ff5724',


        },
      },
      "dracula",

    ],

    darkTheme: 'dracula',

  },

  plugins: [require("@tailwindcss/typography"), require("daisyui")]
}
