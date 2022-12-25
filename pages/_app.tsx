import type { AppProps } from 'next/app';
import { theme } from '../theme';
import { ThemeProvider } from '@material-ui/core';
import '../styles/globals.css';
import 'macro-css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
