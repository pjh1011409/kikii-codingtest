// dropdownBar
import React from 'react';
import styled from '@emotion/styled';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

interface DropdownBarProps {
  isOpened: boolean;
}

const DropdownBar = ({ isOpened }: DropdownBarProps) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/loginPage');
  };

  return (
    <Dropdown isOpened={isOpened}>
      <UserContainer>
        <FaUserCircle size="25px" />
        <span>Username</span>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </UserContainer>
      <MenuItem>홈</MenuItem>
      <MenuItem>근무 관리</MenuItem>
      <MenuItem>배차 관리</MenuItem>
      <MenuItem>지원 관리</MenuItem>
    </Dropdown>
  );
};

export default DropdownBar;

const Dropdown = styled.div<{ isOpened: boolean }>`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: rgba(234, 236, 251);
  color: rgba(1, 0, 0);
  padding: 1rem;
  @media (max-width: 700px) {
    display: ${(props: { isOpened: boolean }) => (props.isOpened ? 'block' : 'none')};
  }
`;

const MenuItem = styled.li`
  text-align: center;
  list-style: none;
  font-size: 16px;
  padding: 12px;
  cursor: pointer;
`;

const UserContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 0.5px solid rgba(28, 40, 148);

  & > span {
    margin: 0px 15px;
    font-size: 15px;
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
