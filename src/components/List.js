import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text } from '../components/common';
import { grey } from '../styles/colors';

const FlatList = styled.FlatList`
  flex: 1;
  /* margin-left: 20; */
  /* margin-top: 8; */
  margin-right: 10;
`;

const Item = styled.View`
  border-bottom-width: 1;
  border-bottom-color: #e6e6e8;
  padding-vertical: 10;
`;

const Row = styled.View`
  flex-direction: row;
`;

const Title = styled.View`
  padding-right: 5;
  flex: 2.5;
`;

const Date = styled.View`
  /* padding-right: 5; */
  flex: 1;
`;

const Arrow = styled.View`
  align-items: flex-end;
  padding-top: 2;
`;

const Checked = styled.View`
  padding-left: 5;
  padding-right: 10;
  padding-top: 2;
`;

const Content = styled.View`
  flex: 1;
`;

const List = props => (
  <FlatList
    data={props.data}
    keyExtractor={item => item.id.toString()}
    renderItem={({ item }) => (
      <Item>
        <Row>
          <Checked>
            <Icon name="circle" color={item.checked ? '#007EF6' : grey} />
          </Checked>
          <Content>
            <Row>
              <Title>
                <Text bold>{item.title}</Text>
              </Title>
              <Date>
                <Text grey>{item.time}</Text>
              </Date>
              <Arrow>
                <Icon name="chevron-right" color={grey} />
              </Arrow>
            </Row>

            <Row>
              <Text>{item.category}</Text>
            </Row>

            <Row>
              <Text grey>{item.content}</Text>
            </Row>
          </Content>
        </Row>
      </Item>
    )}
  />
);

export default List;
