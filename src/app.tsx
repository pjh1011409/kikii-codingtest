import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from '../src/layout/layout';
import { LoadSpinner } from './components/LoadUI/LoadSpinner';

const LoginPage = React.lazy(() => import('./pages/loginPage'));
const ManagementPage = React.lazy(() => import('./pages/managementPage'));

const App = () => (
  <Suspense fallback={<LoadSpinner />}>
    <Routes>
      <Route path="/" element={<Navigate replace to="/loginPage" />} />
      <Route path="/loginPage" element={<LoginPage />} />
      <Route element={<Layout />}>
        <Route path="/managementPage" element={<ManagementPage />} />
      </Route>
    </Routes>
  </Suspense>
);

export default App;
