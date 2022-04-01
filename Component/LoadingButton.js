import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

function LoadingButton() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'start',
        marginTop: '16px',
      }}
    >
      <CircularProgress color="secondary" size={'20px'} sx={{ marginTop: '1px' }} />
      <p style={{ marginLeft: '20px' }}>Mengirim . .</p>
    </div>
  );
}

export default LoadingButton;
