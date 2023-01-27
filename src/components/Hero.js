import React from 'react';

const Hero = () => {
  return (
    <div className="w-full h-[80vh] bg-images top-0 left-0 bg-cover bg-fixed">
      <div className="bg-black/20 absolute top-0 left-0 w-full h-[80vh] " />
      <div className=" max-w-screen-xl h-full flex flex-col justify-center text-white">
        <p className=" pl-36   font-secondary font-normal text-brand">
          <span className="text-8xl"> Find your </span>{' '}
          <span className="text-9xl">Next tour!</span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
