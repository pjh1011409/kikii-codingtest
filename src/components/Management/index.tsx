import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SelectDateBar from './SelectDateBar';
import EditSideBar from './EditSideBar';
import { setData } from '../../redux/reducer/dispatchSlice';
import { useDispatch } from 'react-redux';
import DispatchTable from './table';
import useCustomSelector from '../../hooks/useCustomSelector';

export interface BusData {
  id: number;
  startOrder: number;
  routeName: string;
  driverName: string;
  driverId: number;
  busId: number;
  busNumber: string;
  startTime: string;
  unixStartTime: boolean;
  busRound: number;
  busRounds: BusRound[];
}

export type BusRound = {
  startTime: string;
  busRound: number;
};

export type DriverData = {
  driverName: string;
  busNumber: string;
  busRounds: BusRound[];
};

const Management = () => {
  const [selectStartTime, setSelectStartTime] = useState<BusData | null>(null);
  const [currentDate, setCurrentDate] = useState(new Date('2023-02-23'));
  const isAuthenticated = localStorage.getItem('token') !== null;
  const { hour, minute } = useCustomSelector().dispatchState;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getDispatchData = async (date: string) => {
    try {
      const response = await axios.get(`http://kikibus.iptime.org:18080/dispatch/70/${date}`);
      dispatch(setData(response.data.object));
    } catch (error) {
      console.error(error);
      dispatch(setData([]));
    }
  };

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    const selectedDate = formatDate(currentDate);
    getDispatchData(selectedDate);

    if (!isAuthenticated) {
      navigate('/loginPage');
    }
  }, [currentDate, isAuthenticated, hour, minute]);

  return (
    <Container isSidebarOpen={selectStartTime !== null}>
      <SelectDateBar currentDate={currentDate} setCurrentDate={setCurrentDate} />
      <DispatchTable selectStartTime={selectStartTime} setSelectStartTime={setSelectStartTime} />

      {selectStartTime && <EditSideBar selectStartTime={selectStartTime} setSelectStartTime={setSelectStartTime} />}
    </Container>
  );
};

export default Management;

const Container = styled.div<{ isSidebarOpen: boolean }>`
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  overflow-x: auto;
  margin: 0 auto;
  padding-right: ${({ isSidebarOpen }) => (isSidebarOpen ? '320px' : '0')};
  transition: padding-right 0.2s ease-in-out;
`;
