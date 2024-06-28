/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // sans: ['GeneralSans', 'general-sans'],
        // sansSemiBold: ['GeneralSansSemiBold', 'general-sans'],
        // satoshi: ['SatoshiVariable', 'satoshi-variable'],
      },
    },
  },
  plugins: [],
};
