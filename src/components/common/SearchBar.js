import React, { Component } from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { grey } from '../../styles/colors';

const Container = styled.View`
  background-color: #fff;
  border-radius: 10;
  flex-direction: row;
  padding-vertical: 5;
  align-items: center;
  margin-horizontal: 10;
`;

const LeftIcon = styled.View`
  margin-left: 15;
`;

const TextInput = styled.TextInput`
  margin-horizontal: 10;
  flex: 1;
`;

export const SearchBar = ({ email, password, ...props }) => (
  <Container>
    <LeftIcon>
      <Icon name="search" color={grey} />
    </LeftIcon>

    <TextInput {...props} />
  </Container>
);
