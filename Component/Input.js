import React from 'react';
import { Box, Grid, TextField, Typography, Autocomplete } from '@mui/material';

function Input({ onChange, value, label, key, placeholder, name, id }) {
  return (
    <Grid key={key} item sx={{ mb: 2 }}>
      <Typography fontSize={13}>{label}</Typography>
      <TextField placeholder={placeholder} name={name} id={id} fullWidth onChange={onChange} value={value} />
    </Grid>
  );
}

export default Input;
