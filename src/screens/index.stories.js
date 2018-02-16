import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import LoginScreen from './LoginScreen';
import MainList from './MainList';

const list = [
  {
    id: 1,
    checked: true,
    title: 'Andamio CS-600 inspección',
    category: 'Inspección',
    time: '10:47 AM',
    content:
      'Pavimentación dispareja en Ruta 68. Ernesto Riquelme está al tanto ...'
  },
  {
    id: 2,
    checked: false,
    title: 'Traslado de equipo norte 5',
    category: 'Evidencia',
    time: '11:56 AM',
    content:
      'Entrega y recibo de 5000 paquetes de litio para el martes 7 de Julio...'
  },
  {
    id: 3,
    checked: false,
    title: 'Gruta revisión TR400',
    category: 'Evidencia',
    time: '00:32 AM',
    content:
      'Gerardo Mardones y su equipo quedaron a cargo de la toma de costo desde el inventario...'
  }
];

let longList = list.slice(0);
for (let i = 3; i < 15; i++) {
  longList.push(Object.assign({}, longList[i - 3]));
  longList[i].id = i + 1;
}

storiesOf('Login Screen', module).add('Normal', () => <LoginScreen />);

storiesOf('Listado Principal', module).add('Listado pequeño', () => (
  <MainList data={list} />
));

storiesOf('Listado Principal', module).add('Listado largo', () => (
  <MainList data={longList} />
));

storiesOf('Listado Principal', module).add('No hay datos', () => <MainList />);
