import React from 'react';

const Hero = () => {
  return (
    <div className="w-full h-screen bg-images top-0 left-0 bg-cover bg-fixed">
      <div className="bg-black/20 absolute top-0 left-0 w-full h-screen" />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white"></div>
    </div>
  );
};

export default Hero;
