import React from 'react';
import styled from '@emotion/styled';
import { FaUserCircle, FaBars } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

interface NormalNavBarProps {
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const NormalNavBar = ({ isOpened, setIsOpened }: NormalNavBarProps) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/loginPage');
  };
  return (
    <>
      <MenuList>
        <MenuItem>홈</MenuItem>
        <MenuItem>근무관리</MenuItem>
        <MenuItem>
          <StyledLink to="/managementPage" className="active">
            배차 관리
          </StyledLink>
        </MenuItem>
        <MenuItem>자원 관리</MenuItem>
      </MenuList>
      <Hamburger onClick={() => setIsOpened(!isOpened)}>
        <FaBars size="25px" />
      </Hamburger>
      <UserContainer>
        <FaUserCircle size="25px" />
        <span>Username</span>
        <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
      </UserContainer>
    </>
  );
};

export default NormalNavBar;

const MenuList = styled.ul`
  display: flex;
  list-style: none;
  width: 70%;
  margin: 0;
  padding: 0;
  justify-content: end;
  @media (max-width: 850px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  margin: 0 50px;
  cursor: pointer;
  font-weight: 600;
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  &.active {
    color: rgba(28, 40, 148);
    border-bottom: 2px solid rgba(28, 40, 148);
  }
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  justify-content: center;
  align-items: center;
  & > span {
    margin: 0px 15px;
    font-size: 15px;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

const Hamburger = styled.div`
  display: none;
  @media (max-width: 700px) {
    display: block;
    cursor: pointer;
  }
`;

const LogoutButton = styled.button`
  background-color: rgba(28, 40, 148);
  color: rgba(255, 255, 255);
  border: none;
  cursor: pointer;
  font-size: 12px;
  border-radius: 15px;
  padding: 6px 16px;

  &:hover {
    background-color: rgba(255, 255, 255);
    color: rgba(28, 40, 148);
  }
`;
