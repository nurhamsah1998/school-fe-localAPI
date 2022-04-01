import '../styles/globals.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../Theme/theme';
import { SnackbarProvider } from 'notistack';
import { QueryClientProvider, QueryClient } from 'react-query';

function MyApp({ Component, pageProps }) {
  const query = new QueryClient();
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <QueryClientProvider client={query}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default MyApp;
