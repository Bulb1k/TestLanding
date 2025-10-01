import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                md: '2.5rem',
                lg: '3rem',
                xl: '4rem',
            },
            screens: {
                '2xl': '1512px'
            }
        },
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#01379F',
                },
            },
            borderRadius: {
                base: '2px',
            },
        }
    },
    plugins: [],
} satisfies Config;
