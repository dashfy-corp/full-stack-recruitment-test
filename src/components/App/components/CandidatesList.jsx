import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CandidateCard from './CandidateCard';

const CandidatesList = () => {
  const [candidates, setCandidates] = useState([]);

  // fetch Candidates
  const fetchCandidates = async () => {
    const { data } = await axios.get('http://localhost:5000/candidates');
    return data;
  };

  useEffect(() => {
    const getCandidates = async () => {
      const candidatesFromServer = await fetchCandidates();
      setCandidates(candidatesFromServer);
    };

    getCandidates();
  }, []);

  return (
    <div className="" style={{ backgroundColor: '#FEFFF9' }}>
      <div
        style={{ fontSize: '2.2rem', marginLeft: '55px', marginTop: '20px' }}
      >
        Candidates List
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {candidates.map(candidate => (
          <CandidateCard
            key={candidate.id}
            candidate={candidate}
            onDelete={null}
            onToggle={null}
          />
        ))}
      </div>
    </div>
  );
};

export default CandidatesList;
