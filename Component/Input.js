import React from 'react';
import { Box, Grid, TextField, Typography, Autocomplete } from '@mui/material';

function Input({ onChange, value, anim, label, unique, placeholder, name, id }) {
  return (
    <Grid key={unique} item sx={{ mb: 2 }}>
      <Typography fontSize={13}>{label}</Typography>
      <TextField placeholder={placeholder} label={anim} name={name} id={id} fullWidth onChange={onChange} value={value} />
    </Grid>
  );
}

export default Input;
