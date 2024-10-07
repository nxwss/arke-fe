import React from 'react';
import Link from 'next/link';
import { Row, Col, Container } from 'react-bootstrap';
import Image from 'next/image';

const NotFound = () => {
  return (
    <>
      <Container className='py-5'>
        <Row className='justify-content-center'>
          <Col lg={8} md={12} sm={12}>
            <div className='p-3 text-center d-flex flex-column font_bold'>
              <h1 className="text-white font-black">
                Il nostro sviluppatore ha dimenticato di lavorare su questa pagina..
              </h1>
              <Link href={'/'} className='pt-2'>
                <h4 className='text-white'>
                  Torna indietro
                </h4>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NotFound;
