import React from 'react';
import Image from 'next/image';
import Title from './atoms/Title';
const Subscribe = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="  mx-auto">
        <div className="grid md:grid-cols-2 grid-cols-1  p-8">
          <div className="flex  ">
            <Image
              src="/images/traveler.jpg.webp"
              alt="Picture of the author"
              width={200}
              height={200}
            />

            <div className="flex flex-col justify-center items-center">
              <Title title="subscribe"></Title>{' '}
              <p className="text-base leading-4 mt-2 text-primary ">
                Subscribe to our newsletter to get news about latest trends
              </p>{' '}
            </div>
          </div>
          <div className=" ">
            <div className="grid md:grid-cols-2 grid-cols-1 py-10 ">
              <div className="flex items-center bg-gray-100 ">
                <div className="px-4 py-4">
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/newsletter-IV-svg1.svg"
                    alt="email-icon"
                  />
                </div>
                <input
                  className="pl-2 w-full text-base font-medium leading-none text-gray-600 placeholder-gray-600 focus:outline-none bg-gray-100"
                  placeholder="Enter your email address here"
                />
              </div>{' '}
              <button className="  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-black text-base font-medium leading-none text-white py-4 px-6 bg-gray-800 sm:ml-2 sm:mt-0 mt-4  ">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
