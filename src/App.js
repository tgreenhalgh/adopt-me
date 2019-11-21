/** @format */
import React from 'react';
import { render } from 'react-dom';
import { Router } from '@reach/router';
import SearchParams from './SearchParams';
import Details from './Details';

const App = () => {
  return (
    // React.StrictMode "future-proofs" your code
    // i.e. warns if you use things that will be deprecated soon
    <React.StrictMode>
      <div>
        <h1 id="main">Adopt Me!</h1>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

// render(React.createElement(App), document.getElementById('root'));
render(<App />, document.getElementById('root'));
