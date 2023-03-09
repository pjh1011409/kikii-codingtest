import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { BusData, BusRound, DriverData } from '..';
import useCustomSelector from '../../../hooks/useCustomSelector';
import { useDispatch } from 'react-redux';
import { setHour, setMinute } from '../../../redux/reducer/dispatchSlice';

type TableBodyProps = {
  selectStartTime: BusData | null;
  setSelectStartTime: React.Dispatch<React.SetStateAction<BusData | null>>;
};

const TableBody = ({ selectStartTime, setSelectStartTime }: TableBodyProps) => {
  const { data } = useCustomSelector().dispatchState;
  const dispatch = useDispatch();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleStartTimeClick = (busRound: BusRound) => {
    setIsSidebarOpen(!isSidebarOpen);
    const busData = data.find(item => item.startTime === busRound.startTime && item.busRound === busRound.busRound);
    setSelectStartTime(busData || null);
    const [hour, minute] = busRound.startTime.split(':');
    dispatch(setHour(hour));
    dispatch(setMinute(minute));
  };

  const groupedData = data.reduce((acc: DriverData[], current: BusData) => {
    const existingDriver = acc.find(item => item.driverName === current.driverName);

    if (existingDriver) {
      existingDriver.busRounds.push({
        startTime: current.startTime,
        busRound: current.busRound,
      });
    } else {
      acc.push({
        driverName: current.driverName,
        busNumber: current.busNumber,
        busRounds: [
          {
            startTime: current.startTime,
            busRound: current.busRound,
          },
        ],
      });
    }

    return acc;
  }, []);

  return (
    <TableBodyWrapper>
      {groupedData.map((row, index) => (
        <tr key={`${row.busNumber}`}>
          <FirstColumnCell>{index + 1}</FirstColumnCell>
          <SecondColumnCell>{row.busNumber}</SecondColumnCell>
          <ThirdColumnCell>{row.driverName}</ThirdColumnCell>
          {row.busRounds.map(busRound => (
            <StartTimeCell
              selected={selectStartTime?.startTime === busRound.startTime}
              key={busRound.busRound}
              onClick={() => handleStartTimeClick(busRound)}
            >
              {busRound.startTime}
            </StartTimeCell>
          ))}
        </tr>
      ))}
    </TableBodyWrapper>
  );
};

export default TableBody;

const TableBodyWrapper = styled.tbody`
  border: 1px solid black;
  padding: 8px;
  text-align: center;

  & > tr {
    cursor: grab;
  }

  & > tr:active {
    cursor: grabbing;
  }

  & > tr > td {
    border: 1px solid black;
    padding: 20px 5px;
  }
`;

const FirstColumnCell = styled.td`
  background-color: rgba(226, 229, 236);
  border-right: none;
`;

const SecondColumnCell = styled.td`
  background-color: rgba(247, 247, 249);
  border-right: none;
`;

const ThirdColumnCell = styled.td`
  background-color: rgba(247, 247, 249);
  border-right: none;
`;

const StartTimeCell = styled.td<{ selected: boolean }>`
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? 'rgba(200,204,251)' : 'rgba(255,255,255)')};

  &:hover {
    background-color: rgba(200, 204, 251);
  }
`;
