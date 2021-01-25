import React from 'react';

const ProfileProficiencies = () => {
  // console.log('Inside the Function Section of the Profile Proficiencies Card : ', props2.proficiencies)

  return (
    <section>
      <br />
      <div> Inside the Return Section of the Profile Proficiencies Card </div>
      <div>
        I wasn´t able to display the experiences, proficiencies and education
        sections
      </div>
      <div> </div>
      <div>
        {' '}
        Because I couldn´t access the data from the array of each subject{' '}
      </div>
      <div> The error I got was : props2.proficiencies[0] is undefined </div>
      <div>
        {' '}
        But the data was retrieved ok - and was acessible via console.log(){' '}
      </div>
      <br />
    </section>
  );
};

export default ProfileProficiencies;
