/** @format */
import React from 'react';
import { render } from 'react-dom';
import SearchParams from './SearchParams';

const App = () => {
  return (
    <div>
      <h1 id="boo">Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

// render(React.createElement(App), document.getElementById('root'));
render(<App />, document.getElementById('root'));
