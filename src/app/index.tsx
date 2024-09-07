import React from 'react';
import { createRoot } from 'react-dom/client';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import LandingScreen from './screens/Landing';
import ComponentsScreen from './screens/Components';
import { LIGHT_THEME_COLORS } from './constants/colors';

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('react-page');
  const root = createRoot(container);
  root.render(
    <main style={{ backgroundColor: LIGHT_THEME_COLORS.neutral50, width: '100%', height: '100%' }}>
      <React.StrictMode>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="" element={<LandingScreen />} />
            <Route path="components" element={<ComponentsScreen />}>
              <Route path=":id" element={<></>} />
            </Route>
          </Routes>
        </MemoryRouter>
      </React.StrictMode>
    </main>
  );
});
