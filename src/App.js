/** @format */

const Pet = ({ name, animal, breed }) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, name),
    React.createElement('h2', {}, animal),
    React.createElement('h2', {}, breed),
  ]);
};

const x = 5;

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Adopt Me!'),
    React.createElement(Pet, { name: 'Penny', animal: 'Dog', breed: 'Feist' }),
    React.createElement(Pet, { name: 'Ralph', animal: 'Dog', breed: 'Feist' }),
    React.createElement(Pet, { name: 'Karina', animal: 'Cat', breed: 'Stray' }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
