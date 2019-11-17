/** @format */
import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Adopt Me!'),
    React.createElement(Pet, { name: 'Penny', animal: 'Dog', breed: 'Feist' }),
    React.createElement(Pet, { name: 'Ralph', animal: 'Dog', breed: 'Feist' }),
    React.createElement(Pet, { name: 'Karina', animal: 'Cat', breed: 'Stray' }),
  ]);
};

render(React.createElement(App), document.getElementById('root'));
