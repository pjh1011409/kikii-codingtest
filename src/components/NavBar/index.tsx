import React, { useState } from 'react';
import styled from '@emotion/styled';
import DropdownBar from './DropdownBar';
import NormalNavBar from './NormalNavBar';

const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <NavbarContainer>
      <NormalNavBar isOpened={isOpened} setIsOpened={setIsOpened} />
      <DropdownBar isOpened={isOpened} />
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: rgba(234, 236, 251);
  color: rgba(1, 0, 0);
  height: 45px;
  position: relative;
  z-index: 999;
`;
