import React from 'react';
import {SafeAreaView} from 'react-native';
import {ThemeProvider} from 'react-native-magnus';

const theme = {};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView />
    </ThemeProvider>
  );
};

export default App;
