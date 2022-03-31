import React, { useState } from 'react';
import { Box, Button, Grid, TextField, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { grey } from '@mui/material/colors';
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
    <Box display="flex" justifyContent="flex-start">
      <Box>
        <Box sx={{ maxWidth: '470px' }}>
          <Typography fontSize={26} fontWeight={800} color="primary">
            Menambah Data Peserta Didik Baru{' '}
          </Typography>
          <Typography fontSize={17} fontWeight={400} color="primary">
            Masukkan data siswa dengan benar. data akan disimpan dilocal storange komputer.
          </Typography>
        </Box>
        <Grid container direction="column" justifyContent="flex-start" sx={{ width: '100%', mt: 4 }}>
          <form onSubmit={formik.handleSubmit}>
            {data.map((e, i) => {
              return (
                <Input unique={e.key} name={e.name} id={e.name} value={formik.values[e.name]} onChange={formik.handleChange} anim={e.title} placeholder={e.placeHolder} fullWidth />
              );
            })}
            <Grid item>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Jenis Kelamin</InputLabel>
                <Select id="gender" name="gender" value={formik.values.gender} label="Jenis Kelamin" onChange={formik.handleChange}>
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
      <Box sx={{ width: '30%' }}>
        <Box sx={{ transform: 'scale(0.5)' }}>
          <img src="/icon/add-student-icon.svg" />
        </Box>
      </Box>
    </Box>
  );
}

export default AddingStudent;
