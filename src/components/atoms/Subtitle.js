import React from 'react';

const Subtitle = ({ subtitle }) => {
  return (
    <div className="text-lg   font-semibold font-primary uppercase  my-5 leading-loose text-brand">
      {subtitle}
    </div>
  );
};

export default Subtitle;