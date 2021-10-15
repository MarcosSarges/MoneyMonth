import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Main from './pages/Main';

const { Navigator, Screen } = createStackNavigator();

const Home = () => {
  return (
    <Navigator>
      <Screen name="Main" component={Main} />
    </Navigator>
  );
};

export default Home;
