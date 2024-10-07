import React from 'react';

import { Container, Row } from 'react-bootstrap';

const Footer = () => {

  return (
    <footer style={{ position: 'sticky', top: 0, zIndex: 1020 }} className='footer-sticky-glass'>
      <Container>
        <Row className='py-4 px-2 align-items-center text-center justify-content-center'>
          <p className='text-white font-light'>&copy; <span className='font-bold'>Arkè Consulting Srl</span></p>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
