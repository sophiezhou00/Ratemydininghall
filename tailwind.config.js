/** @type {import('tailwindcss').Config} */
module.exports = {
        content: [
          "./app/**/*.{js,ts,jsx,tsx}", // Scan files inside the "app" directory
          "./components/**/*.{js,ts,jsx,tsx}", // Scan components
          "./pages/**/*.{js,ts,jsx,tsx}", // Scan pages (if using "pages" dir)
        ],
        theme: {
          extend: {},
        },
        plugins: [],
      };
      