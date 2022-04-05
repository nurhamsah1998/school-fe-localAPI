import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { indigo, deepOrange, teal, cyan, green, deepPurple } from '@mui/material/colors';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import { useRouter } from 'next/router';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

function Siswa() {
  const router = useRouter();
  const data = [
    {
      key: 1,
      color: indigo,
      icon: <FolderSharedIcon sx={{ height: 100, width: 100 }} />,
      path: () => router.push(`${router.pathname}/profil-siswa`),
      title: 'Daftar Siswa',
      male: 'Siswa Laki - laki',
      female: 'Siswa Perempuan',
      maleValue: 'null',
      femaleValue: 'null',
    },
    {
      key: 2,
      color: green,
      path: () => router.push(`${router.pathname}/add-student`),
      icon: <AddBoxIcon sx={{ height: 100, width: 100 }} />,
      title: 'Tambah Peserta Didik Baru',
    },
    {
      key: 3,
      color: teal,
      path: () => router.push(`${router.pathname}/student-care`),
      icon: <AssignmentTurnedInIcon sx={{ height: 100, width: 100 }} />,
      title: 'Verify Bantuan Siswa Berprestasi',
    },
  ];
  return (
    <Box sx={{ mt: 2 }}>
      <Grid gap={4} container direction="row" justifyContent="center" alignItems="flex-start">
        {data.map((e, i) => {
          return (
            <Grid
              key={i}
              sx={{
                bgcolor: e.color[500],
                height: 230,
                width: 430,
                borderRadius: '12px',
                transition: 'all 0.4s',
                '&:hover': {
                  boxShadow: 5,
                  transform: 'translateY(-10px)',
                  bgcolor: e.color[600],
                  '&:active': {
                    bgcolor: e.color[400],
                  },
                },
              }}
              item
            >
              <button onClick={e.path} style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}>
                <Box
                  sx={{
                    p: 2,
                    position: 'relative',
                    height: '100%',
                    width: '100%',
                    cursor: 'pointer',
                  }}
                >
                  <Box>
                    <Typography fontSize={23} textAlign="center" fontWeight={700} color="white">
                      {e.title}
                    </Typography>
                  </Box>

                  <Box sx={{ color: 'white', textAlign: 'center' }}>
                    <Box>{e.icon}</Box>
                    <Typography lineHeight="normal">Menambah peserta didik baru. Masukkan data dengan benar agar tidak terjadi miss komunikasi</Typography>
                  </Box>
                  <Box sx={{ position: 'absolute', bottom: '0px', right: '0px', p: 2 }}>
                    <Typography fontSize={23} color="white">
                      {e.amout}
                    </Typography>
                  </Box>
                </Box>
              </button>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Siswa;
