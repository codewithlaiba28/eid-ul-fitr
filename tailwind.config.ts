import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#F3F4F6",
        accent: "#B45309",
        "accent-hover": "#92400E",
        dark: "#111827",
        "accent-border": "var(--border-color)",
        "text-heading": "#111827",
        "text-body": "#4B5563",
        "text-muted": "#9CA3AF",
        "text-on-dark": "#FFFFFF",
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
        arabic: ['var(--font-amiri)', 'serif'],
        urdu: ['var(--font-urdu)', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'accent-gradient': 'linear-gradient(135deg, #B45309 0%, #D97706 50%, #92400E 100%)',
        'glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
      },
      boxShadow: {
        'accent-glow': '0 0 20px rgba(180, 83, 9, 0.3)',
        'accent-glow-strong': '0 0 40px rgba(180, 83, 9, 0.5)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { filter: 'drop-shadow(0 0 5px rgba(180, 83, 9, 0.3))' },
          '50%': { filter: 'drop-shadow(0 0 15px rgba(180, 83, 9, 0.6))' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
