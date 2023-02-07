import React from 'react';

const Description = ({ text }) => {
  return (
    <div className="">
      <p className=" font-light text-base text-primary leading-7 py-2">
        {text}
      </p>
    </div>
  );
};

export default Description;
