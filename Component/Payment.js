import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { green, red, teal, deepOrange } from '@mui/material/colors';

function Payment({ payment_status, payment }) {
  return (
    <Box
      sx={
        payment === 'paid'
          ? { background: green[700], padding: '2px 10px', borderRadius: '12px', color: 'white', ml: 2 }
          : { background: red[600], padding: '2px 10px', borderRadius: '12px', color: 'white', ml: 2 }
      }
    >
      <Typography textAlign="center">
        {payment_status === 'paid' ? payment_status.replace('paid', 'Lunas') : payment_status === 'not_paid' && payment_status.replace('not_paid', 'Belum Lunas')}
      </Typography>
    </Box>
  );
}

export default Payment;
