import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const About = () => {
  return (
    <div style={{ fontSize: '1.6rem', marginTop: '10%' }}>
      <h2 style={{ fontSize: '1.2rem', marginLeft: '38%' }}>
        Dashfy Version 1.0.0
      </h2>
      <Link to="/">
        <Button
          className="btn btn-light"
          style={{ fontSize: '1.2rem', marginLeft: '40%', marginTop: '5%' }}
        >
          Go Back
        </Button>
      </Link>
    </div>
  );
};

export default About;
