import React from 'react';
import { CiCreditCard1 } from 'react-icons/ci';

const Guidance = () => {
  return (
    <div className="grid  md:grid-cols-4  grid-cols-1 gap-4 container mx-auto m-8 px-4">
      <div className=" border border-secondary block justify-center hover:shadow-lg transform duration-300 ">
        <div className="py-20">
          <CiCreditCard1 className=" mx-auto text-7xl text-secondary   my-4"></CiCreditCard1>
          <h3 className=" font-semibold    text-center text-lg text-darkshade">
            8000+ our local Guidance
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Guidance;
