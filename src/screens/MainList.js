import React, { Component } from 'react';
import styled from 'styled-components/native';
import { Text, SearchBar } from '../components/common';
import List from '../components/List';
import TabNavigator from '../components/TabNavigator';

const border = `
  border-width: 1;
  border-color: #000;
`;

const Wrap = styled.View`
  flex: 1;
`;

const NoData = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Search = styled.View`
  height: 40;
  background-color: #c8c8cd;
  justify-content: center;
`;

const MainList = ({ data }) => (
  <Wrap>
    <Search>
      <SearchBar placeholder="Buscar evidencias o inspecciones" />
    </Search>

    {data ? (
      <List data={data} />
    ) : (
      <NoData>
        <Text>No existen datos en este momento</Text>
      </NoData>
    )}

    <TabNavigator />
  </Wrap>
);

// <Icon name="circle" color={checked ? '#007EF6' : grey} />
export default MainList;
