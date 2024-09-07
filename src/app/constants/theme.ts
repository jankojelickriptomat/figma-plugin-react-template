// 1. Import `extendTheme`
import { extendTheme } from '@chakra-ui/react';
import THEME from './colors';

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    ...THEME,
  },
});

export default theme;
