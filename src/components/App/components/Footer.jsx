import React from 'react';
import { Navbar } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Navbar
        style={{
          marginTop: '20px',
          border: '1px solid #c3c3c3',
          backgroundColor: '#FFF8DC',
        }}
      >
        <Navbar.Brand
          className="text-center py-3"
          style={{ marginLeft: '38%' }}
        >
          Copyright 2021 &copy; Dashfy
        </Navbar.Brand>
      </Navbar>
    </footer>
  );
};

export default Footer;
