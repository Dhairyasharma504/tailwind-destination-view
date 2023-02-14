import React from 'react';

const Subtitle = ({ subtitle, hasTextblack }) => {
  return (
    <div
      className={`text-lg font-semibold font-primary uppercase py-5 leading-loose ${
        hasTextblack ? ' text-darkshade' : 'text-brand'
      } `}
    >
      {subtitle}
    </div>
  );
};

export default Subtitle;
