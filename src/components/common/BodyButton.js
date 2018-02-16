import React, { Component } from 'react';
import styled from 'styled-components/native';
import { Text } from './Text';

const Wrap = styled.TouchableHighlight`
  border-radius: 10;
  background-color: rgba(0, 0, 0, 0.6);
  padding-horizontal: 15;
  padding-vertical: 10;
  height: 70;
  width: 150;
  border-color: #736e72;
  border-width: 1;
`;

const Content = styled.View``;

export const BodyButton = ({ title, children, ...props }) => (
  <Wrap {...props}>
    <Content>
      <Text white>{title}</Text>
      <Text small grey>
        {children}
      </Text>
    </Content>
  </Wrap>
);
