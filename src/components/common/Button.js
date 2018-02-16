import React from 'react';
import styled from 'styled-components/native';
import { Text } from './Text';

const Touchable = styled.TouchableHighlight`
  border-radius: 20;
  border-color: #fff;
  border-width: 1;
  height: 40;
  justify-content: center;
  align-items: center;
`;

export const Button = ({ children, ...props }) => (
  <Touchable {...props} underlayColor="#fff">
    <Text white>{children}</Text>
  </Touchable>
);
