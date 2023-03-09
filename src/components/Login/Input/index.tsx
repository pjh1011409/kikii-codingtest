import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import useInput from '../../../hooks/useInput';
import { useNavigate } from 'react-router-dom';
import api from '../../../api/api';
import { MessageType, useToast } from '../../../hooks/useToast';
import UserNumber from './UserNumber';
import UserPassword from './UserPassword';

const LoginInput = () => {
  const isAuthenticated = localStorage.getItem('token') !== null;
  const [userNumber, onChangeUserNumber] = useInput<string>('');
  const [userPassword, onChangeUserPassword] = useInput<string>('');
  const showToast = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (userNumber.trim() === '' || userPassword.trim() === '') {
      showToast(MessageType.Warning, `ID와 PW를 모두 입력하시오.`);
    } else {
      try {
        const response = await api.post('/auth/login', {
          loginId: userNumber.trim(),
          password: userPassword.trim(),
        });
        const token = response.data.object.token;
        localStorage.setItem('token', token);
        navigate('/managementPage');
      } catch (err) {
        showToast(MessageType.Error, `ID 또는 PW 정보가 틀립니다.`);
        console.error(err);
      }
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/managementPage');
    }
  }, [isAuthenticated]);

  return (
    <Form onSubmit={handleSubmit}>
      <UserNumber onChangeUserNumber={onChangeUserNumber} />
      <UserPassword onChangeUserPassword={onChangeUserPassword} />
      <ButtonWrapper>
        <Button type="submit">로그인하기</Button>
      </ButtonWrapper>
    </Form>
  );
};

export default LoginInput;

const Form = styled.form`
  height: 45%;
  display: grid;
  justify-content: center;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 90%;
  margin-top: 20px;
  border-radius: 20px;
  border: none;
  padding: 10px;
  font-size: 15px;
  font-weight: 700;
  color: rgba(255, 255, 255);
  background-color: rgba(1, 0, 0);

  &:hover {
    color: rgba(1, 0, 0);
    background-color: rgba(255, 255, 255);
    border: 0.5px solid rgba(1, 0, 0);
  }
`;
