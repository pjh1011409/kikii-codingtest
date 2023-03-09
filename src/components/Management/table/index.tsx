import React from 'react';
import styled from '@emotion/styled';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import { BusData } from '..';

interface DispatchTableProps {
  selectStartTime: BusData | null;
  setSelectStartTime: React.Dispatch<React.SetStateAction<BusData | null>>;
}

const DispatchTable = ({ selectStartTime, setSelectStartTime }: DispatchTableProps) => {
  return (
    <TableWrapper>
      <Notification>시간 및 차량, 성명란을 눌러 수정하세요.</Notification>
      <Table>
        <TableHeader />
        <TableBody selectStartTime={selectStartTime} setSelectStartTime={setSelectStartTime} />
      </Table>
    </TableWrapper>
  );
};

export default DispatchTable;

const TableWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
  overflow-x: auto;
`;

const Notification = styled.div`
  color: rgba(0, 0, 0);
  margin: 10px 0px;
`;

const Table = styled.table`
  width: 1300px;
  border-collapse: collapse;
  border: 2px solid black;
  font-size: 12px;
`;
