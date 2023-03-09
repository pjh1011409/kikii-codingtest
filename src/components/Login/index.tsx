import React from 'react';
import styled from '@emotion/styled';
import LoginInput from './Input';

const Login = () => {
  return (
    <LoginBox>
      <Header>
        <H1>로그인 </H1>
      </Header>
      <LoginInput />
    </LoginBox>
  );
};

export default Login;

const LoginBox = styled.div`
  width: 450px;
  border: 4px solid #808080;
  border-radius: 10px;
  height: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Header = styled.div`
  height: 35%;
  display: flex;
  justify-content: center;
  align-items: center;

  & > h1 {
    color: rgba(28, 40, 148);
    font-size: 40px;
    font-weight: 600;
  }
`;

const H1 = styled.h1`
  color: rgba(28, 40, 148);
  font-size: 40px;
  font-weight: 600;
`;
