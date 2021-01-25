import React from 'react';
import { Link } from 'react-router-dom';
import Flag from 'react-world-flags';

const CandidateCard = ({ candidate }) => {
  return (
    <Link to={`/candidates/${candidate.id}`}>
      <div
        style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}
      >
        <section
          style={{
            height: '150px',
            width: '430px',
            margin: '12px',
            backgroundColor: 'white',
          }}
        >
          <div>
            <img
              style={{
                height: '150',
                width: '150',
                display: 'inline',
                float: 'left',
              }}
              src={candidate.avatar.split('?')[0]}
              alt="Candidate Name"
              width="150"
              height="150"
            />
          </div>

          <div style={{ height: '150', width: '300', display: 'inline' }}>
            <div
              style={{ marginTop: '40px', color: 'black', fontSize: '1.5rem' }}
            >
              <strong>
                {'  '}
                {candidate.name}
              </strong>
            </div>
            <div
              style={{
                marginLeft: '10px',
                marginTop: '20px',
                color: '#303030',
                fontSize: '1.2rem',
              }}
            >
              {candidate.current_position}
            </div>
            <div style={{ marginLeft: '10px', color: 'blue' }}>
              <Flag code={candidate.countryCode} width="24" height="24" />
              {'  '} {candidate.country} {' - '} {candidate.city}
            </div>
          </div>
        </section>
      </div>
    </Link>
  );
};

export default CandidateCard;
