import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { Container, Row } from 'react-bootstrap';

import collapsed from '../../public/media/collapsed.svg'
import extended from '../../public/media/extended.svg'
import menu from '../../public/media/menu.svg'
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';

const Header = () => {
  const [isExtended, setIsExtended] = useState(true);
  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 575) {
        setIsExtended(false);
      } else {
        setIsExtended(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 1020 }} className='header-sticky-glass'>
      <Container>
        <Row className='py-4 px-2 align-items-center justify-content-between'>
          <div className='col-4 col-lg-2'>
            <Link href={'/'}>
              <Image
                src={isExtended ? extended : collapsed}
                width={isExtended ? 85 : 30}
              />
            </Link>
          </div>
          <div className='col-lg-10 d-none d-lg-flex align-items-center justify-content-end gap-3'>
            <Link href={'/'}>
              <h5 className='text-white font-light p-0 m-0'>
                Home
              </h5>
            </Link>
            <Link href={'/#services'}>
              <h5 className='text-white font-light p-0 m-0'>
                Servizi
              </h5>
            </Link>
            <Link href={'/#case-study'}>
              <h5 className='text-white font-light p-0 m-0'>
                Case Study
              </h5>
            </Link>
{/*             <Link href={'/#contacts'}>
              <h5 className='text-white font-light p-0 m-0'>
                Contatti
              </h5>
            </Link> */}
          </div>
          <div className='col-8 col-lg-10 d-flex d-lg-none justify-content-end gap-3'>
            <Image
              src={menu}
              width={25}
              onClick={() => setModalVisible(true)}
            />
          </div>
        </Row>
      </Container>
      <Modal onClose={() => setModalVisible(false)} size={'full'} isOpen={modalVisible}>
        <ModalOverlay />
        <ModalContent className='back-accent'>
          <ModalCloseButton className='text-white m-2' />
          <p>z</p>
          <ModalBody className='d-flex flex-column align-items-center justify-content-center gap-4'>
            <Link onClick={() => setModalVisible(false)} href={'/'}>
              <h2 className='text-white font-light p-0 m-0'>
                Home
              </h2>
            </Link>
            <Link onClick={() => setModalVisible(false)} href={'/#services'}>
              <h2 className='text-white font-light p-0 m-0'>
                Servizi
              </h2>
            </Link>
            <Link onClick={() => setModalVisible(false)} href={'/#case-study'}>
              <h2 className='text-white font-light p-0 m-0'>
                Case Study
              </h2>
            </Link>
{/*             <Link onClick={() => setModalVisible(false)} href={'/#contacts'}>
              <h2 className='text-white font-light p-0 m-0'>
                Contatti
              </h2>
            </Link> */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </header>
  );
};

export default Header;
