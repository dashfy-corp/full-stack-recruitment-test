import React from 'react';
import Flag from 'react-world-flags';

const ProfileInfo = ({ candidateProfile }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}>
      <section
        style={{ height: '150px', margin: '12px', backgroundColor: 'white' }}
      >
        <div>
          <img
            style={{
              height: '150',
              width: '150',
              display: 'inline',
              float: 'left',
            }}
            src={candidateProfile.avatar}
            alt="Candidate Name"
            width="150"
            height="150"
          />
        </div>

        <div style={{ height: '150', display: 'inline' }}>
          <div
            style={{ marginTop: '30px', color: 'black', fontSize: '2.0rem' }}
          >
            <strong>{candidateProfile.name}</strong>
          </div>
          <div
            style={{ marginLeft: '10px', color: '#303030', fontSize: '1.8rem' }}
          >
            {candidateProfile.current_position}
          </div>
          <div
            style={{ marginLeft: '10px', color: 'blue', fontSize: '1.6rem' }}
          >
            <Flag code={candidateProfile.countryCode} width="24" height="24" />
            {candidateProfile.country} {' - '} {candidateProfile.city} {' - '}{' '}
            {candidateProfile.phone_number}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfileInfo;
