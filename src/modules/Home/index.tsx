import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import FormEntryMoney from './pages/FormEntryMoney';
import Main from './pages/Main';

const { Navigator, Screen } = createStackNavigator();

const Home = () => {
  return (
    <Navigator screenOptions={{ header: () => false }}>
      <Screen name="Main" component={Main} />
      <Screen name="FormEntryMoney" component={FormEntryMoney} />
    </Navigator>
  );
};

export default Home;
