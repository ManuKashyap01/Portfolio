/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          background: '#CFDBD5',
          topography: '#E8EDDF',
          event: '#F5CB5C',
          shadow: '#242423',
          secondaryShadow: '#333533',
        },
        accent: {
          sage: '#A3BFA8',
          taupe: '#8E8C84',
          action: '#FF8C42',
        },
      },
      boxShadow: {
        soft: '0 4px 6px -1px rgba(51, 53, 51, 0.1), 0 2px 4px -1px rgba(51, 53, 51, 0.06)', // Soft shadow using #333533
        medium: '0 5px 15px rgba(36, 36, 35, 0.2)', // Medium shadow using #242423
        eventGlow: '0 0 10px rgba(245, 203, 92, 0.5)', // Highlighted glow using #F5CB5C
        accentShadow: '0 4px 10px rgba(255, 140, 66, 0.4)', // Accent shadow using #FF8C42
      },
      screens: {
        sm: '435px',   // Small devices (e.g., smaller mobile screens)
        md: '900px',   // Medium devices (e.g., tablets or small laptops)
        lg: '1200px',  // Large devices (e.g., desktops)
        xl: '1440px',  // Extra-large screens (e.g., high-resolution desktops)
        '2xl': '1920px', // 4K screens and larger
      },
      fontFamily: {
        heading: ['Roboto', 'sans-serif'], // Roboto for headings
        body: ['Poppins', 'sans-serif'], // Poppins for other text
      },
    },
  },
  plugins: [],
}