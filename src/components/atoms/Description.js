import React from 'react';

const Description = ({ text, hastextwhite }) => {
  return (
    <div className="">
      <p
        className={` font-light text-base  leading-7 py-2 ${
          hastextwhite ? 'text-white' : 'text-primary'
        }`}
      >
        {text}
      </p>
    </div>
  );
};

export default Description;
