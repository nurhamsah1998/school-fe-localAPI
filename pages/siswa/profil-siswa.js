import React, { useState } from 'react';
import Drawer from '../../Component/Drawer';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Typography, Box, Button } from '@mui/material';
import Modal from '../../Component/Modal';
import useFetchingData from '../../Component/useFetchingData';
import { grey, teal } from '@mui/material/colors';
import SearchIcon from '@mui/icons-material/Search';
import BackupIcon from '@mui/icons-material/Backup';
import DeleteIcon from '@mui/icons-material/Delete';
function StudentProfile() {
  const [open, setOpen] = useState(false);
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
  function handleCloseModal() {
    setOpen(false);
  }
  return (
    <Drawer>
      <Modal openModal={open} data={dataProps} close={handleCloseModal} />
      <Box sx={{ mt: 4 }}>
        <Button variant="contained" color="info">
          Backup Data
          <BackupIcon sx={{ ml: 1 }} />
        </Button>
        <Button variant="contained" sx={{ ml: 2 }} color="success">
          Cari siswa
          <SearchIcon />
        </Button>
        <Button variant="contained" sx={{ ml: 2 }} color="error">
          Hapus data siswa
          <DeleteIcon />
        </Button>
      </Box>
      <TableContainer component={Paper} sx={{ maxHeight: 600, mt: 3 }}>
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
            {userData?.map((i) => {
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
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Drawer>
  );
}

export default StudentProfile;
