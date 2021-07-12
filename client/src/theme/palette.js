import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';
const lightBlue = '#5192ad';
const darkBlue = '#1a4c61';
const darkTan = '#ad8351';
const lightTan = '#fac88e';
const brown = '#614424';

export default {
  black,
  white,
  lightBlue,
  darkBlue,
  darkTan,
  lightTan,
  brown,
  primary: {
    contrastText: white,
    dark: '#1a637e',
    main: '#5191ad',
    light: '#83c1df',
  },
  secondary: {
    contrastText: white,
    dark: colors.deepOrange[900],
    main: colors.deepOrange[600],
    light: colors.deepOrange[400],
  },
  success: {
    contrastText: white,
    dark: colors.lightGreen[900],
    main: colors.lightGreen[600],
    light: colors.lightGreen[400],
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400],
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400],
  },
  error: {
    contrastText: white,
    dark: colors.deepOrange[900],
    main: colors.deepOrange[600],
    light: colors.deepOrange[400],
  },
  text: {
    primary: colors.blueGrey[900],
    secondary: colors.blueGrey[600],
    link: colors.blue[600],
  },
  background: {
    default: '#F4F6F8',
    paper: white,
  },
  icon: colors.blueGrey[600],
  divider: colors.grey[200],
  edited: colors.amber[100],
};
