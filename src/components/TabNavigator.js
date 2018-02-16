import React from 'react';
import styled, { css } from 'styled-components/native';
import { Text, SearchBar } from '../components/common';
import Icon from 'react-native-vector-icons/FontAwesome';

const Wrap = styled.View`
  background-color: #f5f5f5;
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: 15;
  padding-vertical: 5;
`;

const Item = styled.View`
  flex: ${({ size }) => (size ? size : 1)};
  ${({ right }) =>
    right &&
    css`
      align-items: flex-end;
    `};
`;

const IconContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
`;

const TextContainer = styled.View`
  flex: 4;
  align-items: center;
`;

const TabNavigator = props => {
  return (
    <Wrap>
      <Item size={1}>
        <Icon name="calendar" size={24} color="#007EF6" />
      </Item>

      <Item size={1}>
        <Icon name="font" size={24} color="#007EF6" />
      </Item>

      <TextContainer>
        <Text>Actualizada justo ahora</Text>
        <Text grey>3 no leídas</Text>
      </TextContainer>

      <Item size={2} right>
        <Icon name="edit" size={24} color="#007EF6" />
      </Item>
    </Wrap>
  );
};

export default TabNavigator;
