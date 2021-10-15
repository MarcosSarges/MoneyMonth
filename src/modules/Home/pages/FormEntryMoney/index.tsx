import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import {
  Button,
  Div,
  Header,
  Icon,
  Input,
  Text,
  Toggle,
} from 'react-native-magnus';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const FormEntryMoney: React.FC = () => {
  const [isEntry, setIsEntry] = useState(false);

  const { goBack } = useNavigation();

  const onSubmit = () => {
    goBack();
  };

  return (
    <Div pt={useSafeAreaInsets().top} flex={1} bg="#FFF">
      <Header
        p="lg"
        borderBottomWidth={1}
        borderBottomColor="gray200"
        alignment="center"
        prefix={
          <Button bg="transparent" onPress={goBack}>
            <Icon name="arrow-left" fontFamily="Feather" fontSize="2xl" />
          </Button>
        }>
        Adicionar entrada ou saida
      </Header>
      <Div p={20}>
        <Input
          returnKeyType="done"
          keyboardType="number-pad"
          rounded="md"
          shadow="md"
          focusBorderColor="blue700"
          placeholder="Valor"
          prefix={<Text>R$</Text>}
          suffix={
            <Icon
              name="cash"
              fontFamily="MaterialCommunityIcons"
              fontSize={30}
            />
          }
        />
        <Div row py="md" alignItems="center" justifyContent="flex-end">
          <Text mr="md">{isEntry ? 'Entrada' : 'Saida'}</Text>
          <Toggle
            bg="red600"
            on={isEntry}
            onPress={() => {
              setIsEntry(!isEntry);
            }}
          />
        </Div>
        <Button
          shadow="xl"
          w="100%"
          rounded="md"
          onPress={onSubmit}
          bg="green700">
          Salvar
        </Button>
      </Div>
    </Div>
  );
};

export default FormEntryMoney;
