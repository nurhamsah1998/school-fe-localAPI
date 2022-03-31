import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { indigo, deepOrange, teal, cyan, green, deepPurple } from '@mui/material/colors';

function Dasboard() {
  const data = [
    {
      key: 1,
      color: teal,
      title: 'Total Siswa',
      male: 'Siswa Laki - laki',
      female: 'Siswa Perempuan',
      maleValue: 'null',
      femaleValue: 'null',
      amout: 'total',
    },
    {
      key: 2,
      color: indigo,
      title: 'Siswa Berprestasi',
      student: 'map',
    },
    {
      key: 3,
      color: deepOrange,
      title: 'Dana Boss',
      amout: 'total',
    },
    {
      key: 4,
      color: cyan,
      title: 'Keuangan Sekolah',
      amout: 'total',
    },
    {
      key: 5,
      color: green,
      title: 'Bantuan Siswa Berprestasi',
      male: 'Siswa Laki - laki',
      female: 'Perempuan',
      maleValue: 'null',
      femaleValue: 'null',
      amout: 'total',
    },
    {
      key: 6,
      color: deepPurple,
      title: 'Kelas',
      amout: 'total',
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
              <Box sx={{ p: 2, position: 'relative', height: '100%', cursor: 'pointer' }}>
                <Typography fontSize={23} fontWeight={700} color="white">
                  {e.title}
                </Typography>
                <Box display="flex" sx={{ mt: 2 }} justifyContent="space-between" color="white">
                  <Box>
                    <Typography>{e.male}</Typography>
                    <Typography>{e.female}</Typography>
                  </Box>
                  <Box>
                    <Typography>{e.maleValue}</Typography>
                    <Typography>{e.femaleValue}</Typography>
                  </Box>
                </Box>
                <Box sx={{ position: 'absolute', bottom: '0px', right: '0px', p: 2 }}>
                  <Typography fontSize={23} color="white">
                    {e.amout}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Dasboard;
