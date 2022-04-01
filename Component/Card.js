import React from 'react';
import { Button, Grid, Box } from '@mui/material';

function Card({ height, xs, bgcolor, active, hover, children }) {
  return (
    <Grid
      item
      sx={{
        bgcolor: bgcolor,
        height: height,
        borderRadius: '12px',
        transition: 'all 0.4s',
        cursor: 'pointer',
        '&:hover': {
          boxShadow: 5,
          transform: 'translateY(-10px)',
          bgcolor: hover,
          '&:active': {
            bgcolor: active,
          },
        },
      }}
      xs={xs}
    >
      {children}
    </Grid>
  );
}

export default Card;
