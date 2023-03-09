import React from 'react';
import { Outlet } from 'react-router';
import styled from '@emotion/styled';
import NavBar from '../components/NavBar';

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Layout;
