import React from 'react';

const Hero = () => {
  return (
    <div className="w-full h-[80vh] bg-images top-0 left-0 bg-cover bg-fixed">
      <div className="bg-black/20 absolute top-0 left-0 w-full h-[80vh] " />
      <div className=" max-w-screen-xl h-full flex flex-col justify-center text-white">
        <p className=" md:pl-36 pl-4   font-secondary font-normal text-red-500">
          <span className="md:text-8xl text-5xl"> Find your </span>{' '}
          <span className="md:text-9xl text-7xl">Next tour!</span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
