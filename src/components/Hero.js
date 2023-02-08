import React from 'react';
import ButtonPrimary from './atoms/ButtonPrimary';

const Hero = () => {
  return (
    <div className="w-full h-[90vh] bg-images top-0 left-0 bg-cover  ">
      <div className="bg-black/25 h-[90vh]">
        <div className=" p-6  h-full flex flex-col justify-center items-start  w-full text-lightshade ">
          {/* <p className=" md:pl-36 pl-4   font-secondary font-normal text-brand">
          <span className="md:text-8xl text-5xl"> Find your </span>{' '}
          <span className="md:text-9xl text-6xl">Next tour!</span>
        </p> */}

          <div className=" bg-red-200 md:bg-blue-500 md:w-3/4 lg:bg-yellow-400 xl:w-1/2 2xl:bg-green-200">
            <p className="text-xl sm:text-2xl xl:text-5xl text-center md:text-left  font-extrabold  leading-6 xl:leading-10 text-lightshade pb-6">
              Let&apos;s Enjoy The Wonders of Nature
            </p>
            <p className="mt-4  text-center md:text-left text-xl leading-normal text-lightshade">
              Looking to create a greater impact with your commercial Christmas
              display? Take a look at the services we have on offer...
            </p>
            <ButtonPrimary lable="explore now"></ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
