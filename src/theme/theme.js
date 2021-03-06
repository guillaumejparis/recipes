module.exports = {
  theme: {
    breakpoint: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1980,
    },
    icon: {
      md: 24,
    },
    palette: {
      common: {
        '"black"': '#000',
        '"white"': '#fff',
      },
      primary: {
        default: '#2e7d32',
        light: '#60ad5e',
        dark: '#005005',
      },
      accent: {
        default: '#ffd740',
        light: '#ffff74',
        dark: '#c8a600',
      },
      background: {
        default: '#f9fbe7',
        paper: '#fff',
      },
      text: {
        primary: 'rgba(0, 0, 0, 0.87)',
        secondary: 'rgba(0, 0, 0, 0.54)',
        light: '#f8f9fa',
        '"white"': '#fff',
      },
    },
    shadow: {
      0: 'none',
      1: '"0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)"',
      4: '"0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)"',
    },
    shape: {
      borderRadius: 4,
    },
    spacing: {
      default: 8,
    },
    typography: {
      htmlFontSize: 16,
      fontFamily: '"system-ui, Roboto, Helvetica, Arial, sans-serif"',
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
      h1: {
        fontFamily: '"system-ui, Roboto, Helvetica, Arial, sans-serif"',
        fontWeight: 300,
        fontSize: '6rem',
        lineHeight: 1.167,
        letterSpacing: '-0.01562em',
      },
      h2: {
        fontFamily: '"system-ui, Roboto, Helvetica, Arial, sans-serif"',
        fontWeight: 300,
        fontSize: '3.75rem',
        lineHeight: 1.2,
        letterSpacing: '-0.00833em',
      },
      h5: {
        fontFamily: '"system-ui, Roboto, Helvetica, Arial, sans-serif"',
        fontWeight: 400,
        fontSize: '1.5rem',
        lineHeight: 1.334,
        letterSpacing: '0em',
      },
      h6: {
        fontFamily: '"system-ui, Roboto, Helvetica, Arial, sans-serif"',
        fontWeight: 500,
        fontSize: '1.25rem',
        lineHeight: 1.6,
        letterSpacing: '0.0075em',
      },
      title: {
        fontFamily: '"Montserrat, system-ui, Roboto, Helvetica, Arial, sans-serif"',
        fontWeight: 500,
        fontSize: '2.125rem',
        lineHeight: 1.235,
        letterSpacing: '0.00735em',
      },
      body1: {
        fontFamily: '"system-ui, Roboto, Helvetica, Arial, sans-serif"',
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: 1.5,
        letterSpacing: '0.00938em',
      },
      body2: {
        fontFamily: '"system-ui, Roboto, Helvetica, Arial, sans-serif"',
        fontWeight: 400,
        fontSize: '0.875rem',
        lineHeight: 1.43,
        letterSpacing: '0.01071em',
      },
    },
  },
};
