import React from 'react';
import TeamCard from './elements/TeamCard';

const team = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 grid-cols-1 gap-5 ">
        <TeamCard />
        <TeamCard />
      </div>
    </div>
  );
};

export default team;
