/** @format */
import { createContext } from 'react';

// "Shape" of a hook ['', () => {}] <- () => {} is default function
// in case one doesn't get passed (should never happen)
const ThemeContext = createContext(['DodgerBlue', () => {}]);

// context could be an object, array, whatever
// used for logged in user data, for example

export default ThemeContext;
