import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';

import ProfileInfo from './ProfileInfo';
import ProfileProficiencies from './ProfileProficiencies';

const CandidateProfile = ({ match }) => {
  const [candidateInfo, setCandidateInfo] = useState({});
  const { id } = match.params;

  const fetchCandidate = async () => {
    const { data } = await axios.get(`http://localhost:5000/candidates/${id}`);
    return data;
  };

  useEffect(() => {
    const getCandidate = async () => {
      const candidateFromServer = await fetchCandidate(id);
      setCandidateInfo(candidateFromServer);
    };

    getCandidate();
  }, []);

  return (
    <section style={{ marginLeft: '10%', marginTop: '20px' }}>
      <div
        style={{ fontSize: '2.0rem', marginLeft: '55px', display: 'inline' }}
      >
        Candidate Profile
      </div>

      <Link to="/">
        <Button
          className="btn btn-light"
          style={{ fontSize: '1.2rem', marginLeft: '40%', display: 'inline' }}
        >
          Go Back
        </Button>
      </Link>

      <ProfileInfo candidateProfile={candidateInfo} />

      {candidateInfo.proficiencies !== undefined && (
        <ProfileProficiencies candidateInfo={candidateInfo.proficiencies} />
      )}
    </section>
  );
};

export default CandidateProfile;
