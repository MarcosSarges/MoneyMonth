import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { Button, Div } from 'react-native-magnus';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Main: React.FC = () => {
  const { navigate } = useNavigation();
  return (
    <Div flex={1} mt={useSafeAreaInsets().top}>
      <Button
        onPress={() => {
          navigate('FormEntryMoney');
        }}>
        Adicionar uma conta
      </Button>
    </Div>
  );
};

export default Main;
