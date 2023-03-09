import React from 'react';
import styled from '@emotion/styled';

const TableHeader = () => {
  return (
    <TableHeaderWrapper>
      <tr>
        <th>순번</th>
        <th>차량번호</th>
        <th>성명</th>
        {[...Array(18)].map((_, index) => (
          <th key={index + 1}>{index + 1}</th>
        ))}
      </tr>
    </TableHeaderWrapper>
  );
};

export default TableHeader;

const TableHeaderWrapper = styled.thead`
  background-color: rgba(226, 229, 236);
  border: 2px solid black;
  text-align: center;

  & > tr > th {
    border: 1px solid black;
    padding: 25px 10px;
  }
`;
