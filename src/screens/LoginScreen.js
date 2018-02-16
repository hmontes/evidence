import React from 'react';
import styled from 'styled-components/native';
import {
  Text,
  Container,
  Input,
  Button,
  BodyButton
} from '../components/common';

const Wrap = styled.View`
  background-color: #191510;
  flex: 1;
  justify-content: center;
`;

const Box = styled.View`
  background-color: rgba(255, 255, 255, 0.4);
  /* height: 60%; */
  flex: 0.7;
`;

const Footer = styled.View`
  flex: 0;
`;

const Title = styled.View`
  /* margin-top: 20; */
  border-color: #3dded9;
  border-bottom-width: 2;
`;

const Top = styled.View`
  justify-content: center;
  flex: 1;
`;

const Form = styled.View`
  flex: 2;
  justify-content: space-around;
`;

const Options = Top.extend`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

const FooterText = Text.extend`
  margin-top: 10;
`;

const LoginScreen = props => {
  return (
    <Wrap>
      <Box>
        <Container>
          <Top>
            <Title>
              <Text h1 white bold center>
                EVIDENCE
              </Text>
            </Title>
            <Text center yellow bold>
              PRODUCTIVIDAD EN TU EMPRESA
            </Text>
          </Top>

          <Form>
            <Input email />
            <Input password />
            <Button onPress={() => null}>INICIAR SESIÓN</Button>
          </Form>

          <Options>
            <BodyButton title="Solicitar usuario" onPress={() => null}>
              Sobre un grupo de trabajo existente
            </BodyButton>

            <BodyButton title="Nuevo usuario" onPress={() => null}>
              Con mi correo electronico
            </BodyButton>
          </Options>
        </Container>
      </Box>

      <Footer>
        <Container>
          <FooterText center>
            <Text grey>
              Agiliza tus procesos, manten ordenado tus reportes,
            </Text>
            <Text grey>envia inspecciones de forma automatica,</Text>
            <Text grey>aumenta tu productividad.</Text>
          </FooterText>
        </Container>
      </Footer>
    </Wrap>
  );
};

export default LoginScreen;
