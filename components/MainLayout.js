// DEPENDENCIES
import React from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// COMPONENTS
import Header from './partials/Header';
import { Container } from 'react-bootstrap';
import Footer from './partials/Footer';

const MainLayout = ({ children }) => {
  return (
    <>
    <ToastContainer />
      <div className='body-container'>
        <Header/>      
        <Container>
          <main className='content'>{children}</main>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
