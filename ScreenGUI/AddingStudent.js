import React from 'react';
import { Box, TextField, FormControl, InputLabel, Select, MenuItem, Typography, Button } from '@mui/material';
import { useFormik } from 'formik';
import axios from 'axios';

function AddingStudent() {
  const formik = useFormik({
    initialValues: { name: '', birt: '', address: '', dad: '', mom: '', gender: '' },
    onSubmit: (values) => {
      axios
        .post('http://localhost:8000/post', values)
        .then((res) => {
          console.log('succes');
          values.name = '';
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Box sx={{ width: '80%', mr: 10 }}>
        <Box sx={{ maxWidth: '470px' }}>
          <Typography fontSize={23} fontWeight={800} color="primary">
            Menambah Data Peserta Didik Baru{' '}
          </Typography>
          <Typography fontSize={17} fontWeight={400} color="primary">
            Masukkan data siswa dengan benar. data akan disimpan dilocal storange komputer.
          </Typography>
        </Box>
        <form onSubmit={formik.handleSubmit} style={{ marginTop: '10px' }}>
          <TextField sx={{ mb: 3 }} label="name" value={formik.values.name} name="name" id="name" onChange={formik.handleChange} fullWidth />
          <FormControl sx={{ mb: 3 }} fullWidth>
            <InputLabel>Jenis Kelamin Siswa</InputLabel>
            <Select name="gender" id="gender" value={formik.values.gender} label="Jenis Kelamin Siswa" onChange={formik.handleChange}>
              <MenuItem value="laki-laki">Laki - Laki</MenuItem>
              <MenuItem value="perempuan">Perempuan</MenuItem>
            </Select>
          </FormControl>
          <TextField sx={{ mb: 3 }} label="Tempat tanggal lahir" value={formik.values.birt} name="birt" id="birt" onChange={formik.handleChange} fullWidth />
          <TextField sx={{ mb: 3 }} label="Alamat lengkap" value={formik.values.address} name="address" id="address" onChange={formik.handleChange} fullWidth />
          <TextField sx={{ mb: 3 }} label="Nama ayah kandung" value={formik.values.dad} name="dad" id="dad" onChange={formik.handleChange} fullWidth />
          <TextField sx={{ mb: 3 }} label="Nama ibu kandung" value={formik.values.mom} name="mom" id="mom" onChange={formik.handleChange} fullWidth />
          <Button type="submit" sx={{ p: 2 }} variant="contained" fullWidth>
            Tambah
          </Button>
        </form>
      </Box>
      <Box sx={{ width: 'fit-content' }}>
        <Box sx={{}}>
          <img style={{ width: '100%' }} src="/icon/add-student-icon.svg" />
        </Box>
      </Box>
    </Box>
  );
}

export default AddingStudent;
