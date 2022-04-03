import { Button, Grid, Box, Container, Typography } from "@mui/material";
import Drawer from "../Component/Drawer";
import { indigo, yellow, teal, cyan, green, deepPurple, red } from "@mui/material/colors";
import Card from "../Component/Card";

export default function Home() {
  return (
    <Drawer title="HELLO, FEELING GOOD TODAY?">
      <Box sx={{ mt: 1, color: "#fff" }}>
        <Grid container gap={2}>
          <Card
            height={230}
            xs={12}
            hover={deepPurple[600]}
            bgcolor={deepPurple[500]}
            active={deepPurple[400]}
          />
          <Grid item xs={12}>
            <Grid container direction="row" justifyContent="space-between" alignItems="center">
              <Card
                height={230}
                xs={6}
                hover={yellow[700]}
                bgcolor={yellow[600]}
                active={yellow[500]}
              >
                <Container sx={{ py: 1 }}>
                  <Typography textAlign="center" fontWeight={800} fontSize={34}>
                    Berita Terbaru
                  </Typography>
                </Container>
              </Card>
              <Card
                height={230}
                xs={5}
                hover={green[600]}
                bgcolor={green[500]}
                active={green[400]}
              />
            </Grid>
          </Grid>
          <Card height={230} xs={12} hover={red[600]} bgcolor={red[500]} active={red[400]} />
        </Grid>
      </Box>
    </Drawer>
  );
}
