import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';

const Teste = styled.View`
  background-color: red;
  color: #fff;
  justify-content: center;
  align-items: center;
`;

const Greeting = ({name}) => {
  return (
    <Teste>
      <Text>Hello {name}!</Text>
    </Teste>
  );
};

const LotsOfGreetings = () => {
  return (
    <Teste>
      <Greeting name='Marcus' />
      <Greeting name='Jaina' />
      <Greeting name='Valeera' />
    </Teste>
  );
};

export default LotsOfGreetings;
