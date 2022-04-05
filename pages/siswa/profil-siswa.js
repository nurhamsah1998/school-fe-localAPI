import React, { useState } from 'react';
import Drawer from '../../Component/Drawer';
import { TableContainer, Table, Checkbox, TableHead, TableBody, TableRow, TableCell, Paper, Typography, Box, Button, TextField } from '@mui/material';
import Modal from '../../ScreenGUI/Modal';
import useFetchingData from '../../Component/useFetchingData';
import { grey, teal } from '@mui/material/colors';
import SearchIcon from '@mui/icons-material/Search';
import BackupIcon from '@mui/icons-material/Backup';
import DeleteIcon from '@mui/icons-material/Delete';
import ModalCompt from '../../Component/ModalCompt';

function StudentProfile() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [dataFilter, setDataFilter] = useState(false);
  const [dataProps, setDataProps] = useState([]);
  const { data, isLoading } = useFetchingData();
  const userData = data?.data;
  const title = [
    {
      id: 1,
      title: 'Nama',
    },
    {
      id: 2,
      title: 'No. telfon',
    },
    {
      id: 3,
      title: 'Alamat',
    },
    {
      id: 4,
      title: 'Gender',
    },
  ];
  function handleOpenModal(e) {
    setDataProps(e);
    setOpen(true);
  }
  const nurhamsah = userData
    ?.filter((value) => {
      if (value == '') {
        return false;
      } else if (value.userProfile[0].name.toLowerCase().includes(input.toLowerCase())) {
        return value;
      }
    })
    .map((i) => {
      return (
        <TableRow
          sx={{
            transition: '0.2s all',
            cursor: 'pointer',
            '&:hover': { background: grey[300] },
            '&:active': { background: teal[500] },
          }}
          key={i.id}
          onClick={() => handleOpenModal(i)}
        >
          <TableCell>{i.userProfile[0].name}</TableCell>
          <TableCell>{i.phone}</TableCell>
          <TableCell>{i.userProfile[3].address}</TableCell>
          <TableCell>{i.userProfile[1].gender}</TableCell>
        </TableRow>
      );
    });

  return (
    <Drawer>
      <Modal openModal={open} data={dataProps} handleClose={() => setOpen(false)} />
      {/* <ModalCompt openModal={search} handleClose={() => setSearch(false)}>
        <Box>
          <Typography fontWeight={400} sx={{ mb: 1 }}>
            Cari Siswa
          </Typography>
          <TextField InputProps={{ startAdornment: <SearchIcon sx={{ mr: 1 }} /> }} placeholder="cari siswa" fullWidth />
        </Box>
      </ModalCompt> */}
      <Box sx={{ mt: 2 }}>
        <Button variant="contained" color="info">
          Backup Data
          <BackupIcon sx={{ ml: 1 }} />
        </Button>
        <Button variant="contained" sx={{ ml: 2 }} color="error">
          Hapus data siswa
          <DeleteIcon />
        </Button>
        <TextField
          sx={{ mt: 2 }}
          onChange={(e) => setInput(e.target.value)}
          value={input}
          InputProps={{ startAdornment: <SearchIcon sx={{ mr: 1 }} /> }}
          placeholder="cari siswa"
          fullWidth
        />
      </Box>
      <TableContainer component={Paper} sx={{ maxHeight: '100vh', mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ background: teal[400], position: 'sticky', top: 0 }}>
              {title.map((i) => (
                <TableCell key={i.id}>
                  <Typography sx={{ color: 'white', fontWeight: 700 }}>{i.title}</Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {nurhamsah?.length === 0 ? (
              <TableRow sx={{ borderColor: 'transparent' }}>
                <TableCell sx={{ textAlign: 'center' }} colSpan={5}>
                  <Typography fontSize={40} fontWeight={700} color={grey[400]}>
                    Ughh!! Tidak Ada Data Yang Cocok !!
                  </Typography>
                  <Typography fontSize={20} fontWeight={500} color={grey[400]}>
                    Coba periksa kembali data yang anda masukkan
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              nurhamsah
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Drawer>
  );
}

export default StudentProfile;
