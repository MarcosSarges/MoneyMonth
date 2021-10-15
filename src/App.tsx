import React from 'react';
import { ThemeProvider } from 'react-native-magnus';
import Router from './Router';

const theme = {};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
