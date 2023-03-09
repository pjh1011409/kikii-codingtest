import React from 'react';
import TextField from '@mui/material/TextField';

interface UserNumberProps {
  onChangeUserNumber: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const UserNumber = ({ onChangeUserNumber }: UserNumberProps) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ' ') {
      e.preventDefault();
    }
  };
  return (
    <TextField
      sx={{ m: 1, width: '17ch' }}
      id="standard-multiline-flexible"
      label="사원번호"
      multiline
      maxRows={4}
      variant="standard"
      onChange={onChangeUserNumber}
      onKeyPress={handleKeyPress}
    />
  );
};

export default UserNumber;
