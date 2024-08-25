import { createTheme } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  color: {
    primary: '#494757',
    secondary: '#d94b95',
    white: '#dddddc'
  },
});