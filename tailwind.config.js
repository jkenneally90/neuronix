module.exports = {
  purge: ['./src/**/*.html', './src/**/*.jsx', './src/**/*.tsx'], // Include TypeScript files for purging
  darkMode: 'media', // 'media' or 'class' for dark mode support
  theme: {
    extend: {
      colors: {
        primary: '#1DA1F2',
        secondary: '#14171A',
        accent: '#657786',
        danger: '#E0245E',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'ping-fast': 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        'fade-in': 'fadeIn 5s ease-in-out', // Define custom fade in animation
        'slide-up': 'slideUp 0.5s ease-out', // Define custom slide up animation
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)' },
          '100%': { transform: 'translateY(0)' }
        }
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'], // Enable animations on hover and focus states
      backgroundColor: ['active'], // Add active variant for background color
      textColor: ['visited'], // Add visited variant for text color
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Add Tailwind CSS Forms plugin
    require('@tailwindcss/typography'), // Add Tailwind CSS Typography plugin
  ],
}
