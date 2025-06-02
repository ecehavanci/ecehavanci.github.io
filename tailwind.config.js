const defaultTheme = require('tailwindcss/defaultTheme');

export default {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                cyber: {
                    bg: '#0F172A',
                    orange: '#F97316',
                },
            },
            fontFamily: {
                sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
                // sans: ['"Space Grotesk"', ...fontFamily.sans],
            },
        },
    },
    plugins: [],
};
