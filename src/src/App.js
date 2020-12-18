import './App.css';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';

import Routes from './routes';

const theme = responsiveFontSizes(createMuiTheme({
  palette: {
    secondary: { light: "rgba(50, 50, 50, 1)", main: "rgba(39, 40, 39, 1)", dark: "rgba(20, 20, 20, 1)"},
    primary: { light: "rgba(255, 255, 255, 1)", main: "rgba(220, 220, 220, 1)", dark: "rgba(150, 150, 150, 1)" },
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: ['"Open Sans"', 'sans-serif'].join(','),
  },
}));


const App = () => (
  <ThemeProvider theme={theme}>
    <Routes />
  </ThemeProvider>
);

export default App;
