/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0a',
        panel: '#111111',
        bone: '#f2f0e9',
        olive: '#5b6b4a',
        blood: '#c1272d',
      },
      fontFamily: {
        display: ['Anton', 'Impact', 'sans-serif'],
        heavy: ['"Archivo Black"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        glitch: {
          '0%,100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 1px)' },
          '40%': { transform: 'translate(2px, -1px)' },
          '60%': { transform: 'translate(-1px, -1px)' },
          '80%': { transform: 'translate(1px, 1px)' },
        },
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
        'marquee-fast': 'marquee 12s linear infinite',
        glitch: 'glitch 0.3s steps(2) infinite',
      },
    },
  },
  plugins: [],
}
