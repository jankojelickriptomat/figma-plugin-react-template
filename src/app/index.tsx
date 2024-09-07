import React from 'react';
import { createRoot } from 'react-dom/client';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import LandingScreen from './screens/Landing';
import ComponentsScreen from './screens/Components';

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('react-page');
  const root = createRoot(container);
  root.render(
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
  );
});
