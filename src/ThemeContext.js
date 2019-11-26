/** @format */
import { createContext } from 'react';

// "Shape" of a hook ['', () => {}] <- () => {} is default function
// in case one doesn't get passed (should never happen)
const ThemeContext = createContext(['dodgerblue', () => {}]);

export default ThemeContext;
