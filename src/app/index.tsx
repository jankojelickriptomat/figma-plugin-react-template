import React from 'react';
import { createRoot } from 'react-dom/client';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import LandingScreen from './screens/Landing';
import ComponentsScreen from './screens/Components';
import { LIGHT_THEME_COLORS } from './constants/colors';
import NewComponentScreen from './screens/Components/New';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './constants/theme';

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('react-page');
  const root = createRoot(container);
  root.render(
    <main style={{ backgroundColor: LIGHT_THEME_COLORS.neutral50 }}>
      <React.StrictMode>
        <MemoryRouter initialEntries={['/']}>
          <ChakraProvider theme={theme} resetCSS={false}>
            <Routes>
              <Route path="/" element={<LandingScreen />} />
              <Route path="/components" element={<ComponentsScreen />} />
              <Route path="/components/new" element={<NewComponentScreen />} />
              <Route path="/components/:id" element={<></>} />
            </Routes>
          </ChakraProvider>
        </MemoryRouter>
      </React.StrictMode>
    </main>
  );
});
