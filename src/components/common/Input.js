import React, { Component } from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Container = styled.View`
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 20;
  flex-direction: row;
  height: 40;
  align-items: center;
`;

const LeftIcon = styled.View`
  margin-left: 15;
`;

const TextInput = styled.TextInput`
  margin-horizontal: 10;
  flex: 1;
  color: #fff;
`;

export const Input = ({ email, password, ...props }) => (
  <Container>
    {(email || password) && (
      <LeftIcon>
        <Icon name={email ? 'envelope' : 'user'} size={15} color="#fff" />
      </LeftIcon>
    )}
    <TextInput {...props} secureTextEntry={password} />
  </Container>
);
