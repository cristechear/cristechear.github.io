/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./*.{html,css,js,jsx,ts,tsx}",
        "./public/index.html",
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Roboto'],
            },
            backgroundImage: {
                'header-bg': "url('/headerBackground.jpg')",
              }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio'),
    ],
    
}
