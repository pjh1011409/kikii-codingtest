import React from 'react';
import styled from '@emotion/styled';
import { MessageType, useToast } from '../../hooks/useToast';

interface SelectDateBarProps {
  currentDate: Date;
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
}

const SelectDateBar = ({ currentDate, setCurrentDate }: SelectDateBarProps) => {
  const showToast = useToast();

  const changeDate = (days: number) => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + days);
    if (newDate < new Date('2023-02-20') || newDate > new Date('2023-02-26')) {
      return showToast(MessageType.Error, '데이터는 20일에서 26일까지 존재!');
    }
    showToast(MessageType.Success, `배차 조회 성공`);
    setCurrentDate(newDate);
  };

  const detailDate = (date: Date) => {
    const formatter = new Intl.DateTimeFormat('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    });
    return formatter.format(date);
  };

  return (
    <SelectDateBarWrapper>
      <ArrowButton onClick={() => changeDate(-1)}>{'<'}</ArrowButton>
      <DetailDate>{detailDate(currentDate)}</DetailDate>
      <ArrowButton onClick={() => changeDate(1)}>{'>'}</ArrowButton>
    </SelectDateBarWrapper>
  );
};

export default SelectDateBar;

const SelectDateBarWrapper = styled.div`
  color: rgba(0, 0, 0);
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ArrowButton = styled.button`
  border: none;
  background-color: rgba(255, 255, 255);
  margin: 0px 50px;
  font-size: 25px;

  &:hover {
    transform: scale(1.2);
  }
`;

const DetailDate = styled.span`
  font-size: 22px;
`;
