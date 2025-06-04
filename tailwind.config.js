/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
      },
      maxWidth: {
        'screen-3xl': '1920px',
      },
      transitionProperty: {
        'all': 'all',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
          "zoom-fade-in": "zoom-fade-in 0.3s ease-out",
        "zoom-fade-out": "zoom-fade-out 0.2s ease-in",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        'scroll': 'scroll 30s linear infinite',
      },
      keyframes: {
        scroll: {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-100%)' },
        }
    },
      colors: {
        'primary-blue': 'var(--primary-blue)',
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'success': 'var(--success)',
        'danger': 'var(--danger)',
        'warning': 'var(--warning)',
        'info': 'var(--info)',
        'base': 'var(--base)',
        
      },
      marquee: {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(calc(-100% - var(--gap)))" },
      },
      "marquee-vertical": {
        from: { transform: "translateY(0)" },
        to: { transform: "translateY(calc(-100% - var(--gap)))" },
      },
    },
  },
  plugins: [],
}
