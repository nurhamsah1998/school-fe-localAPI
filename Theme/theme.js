import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { green, deepPurple, teal, red } from "@mui/material/colors";

const styles = createTheme({
  palette: {
    primary: {
      main: teal[500],
    },
    secondary: {
      main: deepPurple[500],
    },
    error: {
      main: red[500],
    },
  },
});
const theme = responsiveFontSizes(styles);
export default theme;
