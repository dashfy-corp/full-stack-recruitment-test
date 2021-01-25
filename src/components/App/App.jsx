import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './components/Header';
import Footer from './components/Footer';
import CandidatesList from './components/CandidatesList';
import CandidateProfile from './components/CandidateProfile';
import About from './components/About';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => (
  <Router>
    <Header />
    <main className="py-3" style={{ backgroundColor: 'white' }}>
      <Container fluid style={{ backgroundColor: 'white' }}>
        <Route path="/" component={CandidatesList} exact />
        <Route path="/candidates/:id" component={CandidateProfile} />
        <Route path="/about" component={About} />
      </Container>
    </main>
    <Footer />
  </Router>
);

export default App;
