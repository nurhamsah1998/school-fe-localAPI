import React from 'react';
import Drawer from '../Component/Drawer';
import { Table, Box, TableContainer, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';

function StudentCares() {
  return (
    <Drawer>
      <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Box>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography>Nama siswa</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>nur</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box>asad</Box>
      </Box>
    </Drawer>
  );
}

export default StudentCares;
