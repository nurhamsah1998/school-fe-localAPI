import '../styles/globals.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../Theme/theme';
import { SnackbarProvider } from 'notistack';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <Component {...pageProps} />
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default MyApp;
