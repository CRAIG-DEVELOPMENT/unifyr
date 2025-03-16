import { DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0a153d',      // Primary Blue
    secondary: '#ffe414',    // Secondary Gold/Yellow
    background: '#FFFFFF',   // White
    surface: '#FFFFFF',
    text: '#0a153d',
    error: '#FF5252',
    accent: '#ffe414',
  },
  roundness: 10,
};
