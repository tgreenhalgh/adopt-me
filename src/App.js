/** @format */
import React, { useState } from 'react';
import { render } from 'react-dom';
import { Router, Link } from '@reach/router';
import SearchParams from './SearchParams';
import Details from './Details';
import ThemeContext from './ThemeContext';

const App = () => {
  // note that themeHook is the whole array [color, setColor]
  const themeHook = useState('darkblue');

  return (
    // React.StrictMode "future-proofs" your code
    // i.e. warns if you use things that will be deprecated soon
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

// render(React.createElement(App), document.getElementById('root'));
render(<App />, document.getElementById('root'));
