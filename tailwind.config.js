/** @type {import('tailwindcss').Config} */
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
        'xl': '0 15px 15px rgba(255, 255, 255, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
    },
    daisyui: { 
      themes: [
        "sunset",
      ]
    }
  },

  plugins: [require("@tailwindcss/typography"), require("daisyui")]

  
}
