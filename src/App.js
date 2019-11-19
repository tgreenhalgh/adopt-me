/** @format */
import React from 'react';
import { render } from 'react-dom';
import SearchParams from './SearchParams';

const App = () => {
  return (
    // React.StrictMode "future-proofs" your code
    // i.e. warns if you use things that will be deprecated soon
    <React.StrictMode>
      <div>
        <h1 id="boo">Adopt Me!</h1>
        <SearchParams />
      </div>
    </React.StrictMode>
  );
};

// render(React.createElement(App), document.getElementById('root'));
render(<App />, document.getElementById('root'));
