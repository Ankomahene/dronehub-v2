import { ChakraProvider } from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { theme } from '../config/theme';
import { Footer } from '../layouts';
import '../styles/globals.css';
import '../styles/styles.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Header } from '../components/Header/Header';
import { DronesContextProvider } from '../context/dronesContext';
import { DataFetching } from '../components/DataFetching';
import Meta from '../components/Meta/Meta';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <DronesContextProvider>
        <Meta />
        <DataFetching />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </DronesContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
