import React from 'react';
import styled from '@emotion/styled';
import { BusData } from '../Management/index';
import { useDispatch } from 'react-redux';
import { setHour, setMinute } from '../../redux/reducer/dispatchSlice';
import useCustomSelector from '../../hooks/useCustomSelector';
import { MessageType, useToast } from '../../hooks/useToast';
import api from '../../api/api';

interface EditSideBarProps {
  selectStartTime: BusData;
  setSelectStartTime: React.Dispatch<React.SetStateAction<BusData | null>>;
}

const EditSideBar = ({ selectStartTime, setSelectStartTime }: EditSideBarProps) => {
  const { hour, minute } = useCustomSelector().dispatchState;
  const dispatch = useDispatch();
  const showToast = useToast();

  const handleStartTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'hour') {
      const numValue = Number(value);
      if (/^\d{0,2}$/.test(value) && numValue >= 0 && numValue <= 24) {
        dispatch(setHour(value));
      } else {
        showToast(MessageType.Warning, `00 ~ 24시 범위 내에서 입력해주세요.`);
      }
    } else if (name === 'minute') {
      const numValue = Number(value);
      if (/^\d{0,2}$/.test(value) && numValue >= 0 && numValue <= 59) {
        dispatch(setMinute(value));
      } else {
        showToast(MessageType.Warning, `00 ~ 59분 범위 내에서 입력해주세요.`);
      }
    }
  };

  const handleSave = async (e: React.FormEvent<HTMLFormElement>, id: number, startTime: string) => {
    e.preventDefault();
    const time = `${hour}:${minute}`;

    if (time === startTime || hour === '' || minute === '') {
      showToast(MessageType.Warning, `수정 시간을 입력해주세요.`);
      return;
    }

    const token = localStorage.getItem('token');

    if (!token) {
      showToast(MessageType.Error, `로그인 후 이용해주세요.`);
      return;
    }
    try {
      const response = await api.patch(`/dispatch/update/${id}/${time}`);
      showToast(MessageType.Success, response.data.message);
      setSelectStartTime(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SideBar isSidebarOpen={selectStartTime !== null}>
      <SideBarTop>시간 수정</SideBarTop>

      <SideBarMiddle>
        <ASection>
          <AHeader>A. 변경할 시간</AHeader>
          <ANotification>
            <strong>변경할 시간</strong>을 선택(클릭)해주세요.
          </ANotification>
          <SelectInfo className="sidebar-header">{`${selectStartTime.driverName} - ${
            selectStartTime.busRound + 1
          }회차 / ${selectStartTime.startTime}`}</SelectInfo>
        </ASection>
        <BSection>
          <BHeader>B. 수정 시간 입력</BHeader>
          <BNotification>수정할 시간을 입력해주세요.</BNotification>
          <form onSubmit={e => handleSave(e, selectStartTime.id, selectStartTime.startTime)}>
            <InputRow>
              <Input type="text" name="hour" min="0" max="24" value={hour} onChange={handleStartTimeChange} />
              <Character>: </Character>
              <Input type="text" name="minute" min="0" max="59" value={minute} onChange={handleStartTimeChange} />
            </InputRow>
            <ButtonRow>
              <CancelButton
                type="button"
                onClick={() => {
                  setSelectStartTime(null);
                }}
              >
                취소
              </CancelButton>
              <SubmitButton type="submit">변경</SubmitButton>
            </ButtonRow>
          </form>
        </BSection>
      </SideBarMiddle>
    </SideBar>
  );
};

export default EditSideBar;

const SideBar = styled.div<{ isSidebarOpen: boolean }>`
  position: fixed;
  right: 0;
  top: 0;
  width: 350px;
  height: 100vh;
  margin-top: 10px;
  padding-top: 45px;
  background-color: rgba(235, 236, 251);
  z-index: 998;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  transition: transform 0.2s ease-in-out;
  transform: ${({ isSidebarOpen }) => (isSidebarOpen ? 'translateX(0)' : 'translateX(100%)')};

  &.active {
    transform: translateX(0%);
  }
`;

const SideBarTop = styled.h1`
  height: 180px;
  font-weight: 700;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(0, 0, 0);
`;

const SideBarMiddle = styled.div`
  height: 500px;
  padding: 10px 50px;
`;

const ASection = styled.div`
  padding: 20px 0px;
`;

const AHeader = styled.div`
  font-weight: 600;
  font-size: 17px;
  color: rgba(29, 39, 148);
`;

const ANotification = styled.div`
  margin: 10px 0px;
  font-weight: 400;
  font-size: 12px;
`;

const SelectInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255);
  padding: 10px;
`;

const BSection = styled.div`
  padding: 20px 0px;
`;

const BHeader = styled.div`
  font-weight: 600;
  font-size: 17px;
  color: rgba(29, 39, 148);
`;

const BNotification = styled.div`
  margin: 10px 0px;
  font-weight: 700;
  font-size: 12px;
`;

const InputRow = styled.div`
  display: flex;
`;

const Input = styled.input`
  width: 50%;
  border: none;
  text-align: center;
  font-size: 20px;
`;

const Character = styled.div`
  font-size: 30px;
  font-weight: 900;
  color: rgba(137, 137, 137);
  margin: 0px 10px;
`;

const ButtonRow = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CancelButton = styled.button`
  width: 50%;
  height: 20%;
  border: none;
  border-radius: 30px;
  margin: 0px 10px;
  color: rgba(255, 255, 255);
  background-color: rgba(137, 137, 137);
  font-size: 15px;
  font-weight: 600;

  &:hover {
    background-color: rgba(255, 255, 255);
    color: rgba(137, 137, 137);
  }
`;

const SubmitButton = styled.button`
  width: 50%;
  height: 20%;
  border: none;
  border-radius: 30px;
  margin: 0px 10px;
  font-size: 15px;
  font-weight: 600;

  color: rgba(255, 255, 255);
  background-color: rgba(29, 39, 148);

  &:hover {
    background-color: rgba(255, 255, 255);
    color: rgba(29, 39, 148);
  }
`;
