import React from 'react';
import '../styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainLayout from '../components/MainLayout';
import 'react-toastify/dist/ReactToastify.css';
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  return (
  <ChakraProvider>
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  </ChakraProvider>
  );
}

export default MyApp;