import React, { useState } from 'react';
import { Box, Button, Grid, TextField, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import Input from '../Component/Input';
import { useFormik } from 'formik';

function AddingStudent() {
  const [gen, setGen] = useState(true);
  const formik = useFormik({
    initialValues: { name: '', gender: '', birtDay: '', address: '', dad: '', mom: '' },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const data = [
    {
      key: 1,
      placeHolder: 'Nama siswa',
      title: 'Nama Siswa',
      name: 'name',
    },
    {
      key: 3,
      placeHolder: 'Tempat tanggal lahir siswa',
      title: 'Tempat Tanggal Lahir',
      name: 'birtDay',
    },
    {
      key: 4,
      placeHolder: 'Alamat lengkap siswa',
      title: 'Alamat Lengkap',
      name: 'address',
    },
    {
      key: 5,
      placeHolder: 'Nama ayah siswa',
      title: 'Nama Ayah',
      name: 'dad',
    },
    {
      key: 6,
      placeHolder: 'Nama ibu siswa',
      title: 'Nama Ibu',
      name: 'mom',
    },
  ];
  return (
    <Box>
      <Grid container direction="column" justifyContent="flex-start" sx={{ maxWidth: '450px' }}>
        <form onSubmit={formik.handleSubmit}>
          {data.map((e, i) => {
            return (
              <Input key={e.key} name={e.name} id={e.name} value={formik.values[e.name]} onChange={formik.handleChange} label={e.title} placeholder={e.placeHolder} fullWidth />
            );
          })}
          <Grid item>
            <FormControl fullWidth>
              <Typography fontSize={13}>Jenis Kelamin</Typography>
              <Select id="gender" name="gender" value={formik.values.gender} onChange={formik.handleChange}>
                <MenuItem value={'perempuan'}>Perempuan</MenuItem>
                <MenuItem value={'laki-laki'}>Laki - Laki</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Button type="submit" variant="contained" sx={{ mt: 2, p: 2 }} fullWidth>
            Tambah Siswa
          </Button>
        </form>
      </Grid>
    </Box>
  );
}

export default AddingStudent;
