module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: "#f59e0b", // amber-500
        "primary-light": "#fbbf24", // amber-400
        "primary-dark": "#d97706", // amber-600
        
        // Secondary Colors
        secondary: "#1e293b", // slate-800
        "secondary-light": "#334155", // slate-700
        "secondary-dark": "#0f172a", // slate-950
        
        // Background Colors
        background: "#0f172a", // slate-950
        surface: "#1e293b", // slate-800
        "surface-light": "#334155", // slate-700
        
        // Text Colors
        "text-primary": "#ffffff", // white
        "text-secondary": "#cbd5e1", // slate-300
        "text-muted": "#94a3b8", // slate-400
        
        // Status Colors
        success: "#10b981", // emerald-500
        warning: "#f59e0b", // amber-500
        error: "#ef4444", // red-500
        
        // Slate palette for additional usage
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617"
        },
        
        // Amber palette for CTAs
        amber: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f"
        },
        
        // Emerald for success states
        emerald: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b"
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif']
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }]
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800'
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem'
      },
      boxShadow: {
        'cta': '0 10px 25px -3px rgba(0, 0, 0, 0.3)',
        'cta-hover': '0 15px 30px -3px rgba(0, 0, 0, 0.4)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.2)',
        'form': '0 4px 6px -1px rgba(0, 0, 0, 0.2)'
      },
      animation: {
        'pulse-slow': 'pulse 1.5s infinite',
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      backdropBlur: {
        xs: '2px'
      }
    }
  },
  plugins: []
}