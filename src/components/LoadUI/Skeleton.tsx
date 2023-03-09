import React from 'react';
import Skeleton from '@mui/material/Skeleton';
export const SkeletonListUI = () => {
  const numberOfSkeletons = 6;

  return (
    <>
      <Skeleton animation="wave" width="1000px" height={70} sx={{ bgcolor: 'grey.600' }} />

      {Array.from(new Array(numberOfSkeletons)).map((_, i) => (
        <Skeleton key={i} animation="wave" width="1000px" height={55} />
      ))}
    </>
  );
};
