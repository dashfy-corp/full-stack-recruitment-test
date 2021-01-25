import React from 'react';
import { Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <Navbar
        bg="ligth"
        style={{ border: '1px solid #c3c3c3', backgroundColor: '#FFF8DC' }}
      >
        <Navbar.Brand href="/">
          <img
            src="../../../android-chrome-512x512.png"
            width="80"
            height="80"
            className="d-inline-block align-top"
            style={{ marginLeft: '30px' }}
            alt="Dashfy logo"
          />
        </Navbar.Brand>

        <Navbar.Brand href="/" style={{ marginLeft: '2%', fontSize: '40px' }}>
          {'   '}Dashfy
        </Navbar.Brand>

        <Navbar.Brand
          href="/about"
          style={{ marginLeft: '75%', fontSize: '28px' }}
        >
          {'   '}About
        </Navbar.Brand>
      </Navbar>
    </>
  );
};

export default Header;
