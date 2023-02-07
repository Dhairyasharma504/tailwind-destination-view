import React from 'react';

const Hero = () => {
  return (
    <div className="w-full h-[90vh] bg-images top-0 left-0 bg-cover  ">
      <div className="bg-black/25 h-[90vh]">
        <div className=" p-6  h-full flex flex-col justify-center md:w-1/2 w-full text-white">
          {/* <p className=" md:pl-36 pl-4   font-secondary font-normal text-brand">
          <span className="md:text-8xl text-5xl"> Find your </span>{' '}
          <span className="md:text-9xl text-6xl">Next tour!</span>
        </p> */}

          <div class="   ">
            <p class="text-xl sm:text-2xl xl:text-5xl text-center md:text-left  font-extrabold  leading-6 xl:leading-10 text-white  pb-6">
              Let's Enjoy The Wonders of Nature
            </p>
            <p class="mt-4 md:w-80 lg:w-2/3 xl:w-3/4 text-center md:text-left text-xl leading-normal text-white">
              Looking to create a greater impact with your commercial Christmas
              display? Take a look at the services we have on offer...
            </p>
            <button class="mt-6 shrink-0 w-full md:w-auto  lg:mt-8 py-2 md:py-3 px-10 flex justify-center duration-700  items-center text-base border-2 border-white transition hover:-translate-y-1 hover:bg-gray-100 hover:text-gray-800 font-medium text-white">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
