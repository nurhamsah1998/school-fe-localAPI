import React from 'react';
import { Grid, Container, Typography, TextField, Button } from '@mui/material';
import Card from '../Component/Card';
import { indigo, yellow, teal, cyan, green, deepPurple, red } from '@mui/material/colors';
import { Box } from '@mui/system';

function Keuangan() {
  return (
    <Grid container sx={{ mt: 1 }} direction="row" gap={3} alignItems="center">
      <Card height={530} xs={5} hover={deepPurple[600]} bgcolor={deepPurple[500]} active={deepPurple[400]} />
      <Grid item xs={6}>
        <Grid container gap={3}>
          <Card height={240} xs={12} hover={red[600]} bgcolor={red[500]} active={red[400]}>
            <Container sx={{ py: 1 }}>
              <Box>
                <Typography fontSize={34} fontWeight={800} color="white">
                  Uang Pemasukan
                </Typography>
              </Box>
              <Box sx={{ p: 2, bgcolor: 'whitesmoke', borderRadius: '5px' }}>
                <Typography>Masukkan Uang Pemasukan</Typography>
                <TextField fullWidth placeholder="contoh yang benar : 2000 contoh yang salah : 2.000" />
                <Button sx={{ mt: 3, bgcolor: red[500], '&:hover': { bgcolor: red[700] } }} fullWidth variant="contained">
                  Kirim
                </Button>
              </Box>
            </Container>
          </Card>
          <Card height={240} xs={12} hover={cyan[600]} bgcolor={cyan[500]} active={cyan[400]}>
            <Container sx={{ py: 1 }}>
              <Box>
                <Typography fontSize={34} fontWeight={800} color="white">
                  Uang Pengeluaran
                </Typography>
              </Box>
              <Typography color="white">
                sequat ut fugiat ut. Cupidatat ullamco officia eu aute dolore. Esse in ipsum eu exceEt cillum consectetur sunt esse laboris ut non eu voluptate adipisicing ullamco.
                Tempor ex voluptate voluptate duis dolor eu non ad officia sit quis aute cupidatat cupidatat.
              </Typography>
            </Container>
          </Card>
        </Grid>
      </Grid>
      <Card height={440} xs={12} hover={indigo[600]} bgcolor={indigo[500]} active={indigo[400]}>
        <Container sx={{ py: 1 }}>
          <Box>
            <Typography fontSize={23} fontWeight={800} color="white">
              Laporan Keuangan Sekolah Tahun 2021
            </Typography>
          </Box>
          <Typography color="white">
            Anim occaecat consectetur cillum fugiat. Aliquip magna cillum reprehenderit commodo id sit aliqua enim culpa cillum fugiat sunt aliquip aliquip. Adipisicing ipsum id
            culpa elit nostrud non exercitation quis duis qui eiusmod ad non adipisicing. Lorem cillum occaecat voluptate incididunt anim in. Incididunt in tempor ullamco officia
            labore. Nulla magna cillum amet irure non enim cillum anim aliquip quis minim ipsum officia. Aliqua aliqua nulla et duis ex commodo eiusmod. Incididunt irure sint
            occaecat adipisicing labore proident ullamco Lorem. Esse consectetur velit eu enim ullamco esse veniam Lorem mollit minim sit. Ea adipisicing velit magna nisi aute
            cillum. Enim quis sint elit fugiat cupidatat quis et minim exercitation cillum nisi aliquip ea. Ex officia veniam ullamco Lorem amet adipisicing dolor eu in ipsum.
            Adipisicing anim consequat non pariatur non qui est in. Nostrud magna consequat veniam sunt duis cillum est qui. Exercitation in officia magna fugiat pariatur elit
            occaecat tempor cillum esse ipsum laboris amet dolor. Amet proident eu labore esse eiusmod. In quis pariatur proident nulla eiusmod sunt quis quis est velit sunt dolor
            laboris. Qui duis esse eiusmod magna duis esse tempor proident laboris elit. Nostrud qui commodo occaecat elit velit velit id duis nulla aute do est mollit. Consectetur
            in dolore culpa velit cillum sunt nulla id. Ad ipsum aliqua pariatur qui et officia nisi ut sit non. Veniam eiusmod culpa eu reprehenderit laborum do sint adipisicing
            ex irure. Pariatur velit cillum adipisicing mollit culpa reprehenderit id id adipisicing laboris. Eu excepteur dolor qui occaecat magna. Fugiat voluptate ut magna ut
            nostrud ullamco ad duis ad. Ipsum deserunt exercitation consequat sunt incididunt est cupidatat. In reprehenderit laborum sunt labore cupidatat est amet amet nisi
            laboris. Do ullamco ex quis aliquip veniam anim ipsum minim tempor esse ipsum. Velit amet amet fugiat voluptate excepteur et.
          </Typography>
        </Container>
      </Card>
    </Grid>
  );
}

export default Keuangan;
