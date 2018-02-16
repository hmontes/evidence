import styled, { css } from 'styled-components/native';
import { white, yellow, grey } from '../../styles/colors';

const color = ({ white, yellow, grey }) =>
  white
    ? css`
        color: white;
      `
    : yellow
      ? css`
          color: yellow;
        `
      : grey
        ? css`
            color: grey;
          `
        : null;

export const Text = styled.Text`
  ${props =>
    props.h1 &&
    css`
      font-size: 32;
    `}
    ${props =>
      props.small &&
      css`
        font-size: 12;
      `}
    ${props => color(props)}
    ${props =>
      props.bold &&
      css`
        font-weight: bold;
      `}
    ${props =>
      props.center &&
      css`
        text-align: center;
      `}
    
`;
