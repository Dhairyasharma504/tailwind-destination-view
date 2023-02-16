import React from "react";
import Image from "next/image";

function Subscrib() {
  return (
    <div className=" container mx-auto px-8">
      <div className="xl:flex items-center 2xl:mx-auto 2xl:container py-16 sm:mx-20 ">
        <div className="lg:p-24 sm:p-9 md:p-16 p-4 2xl:w-8/12 xl:w-11/12 w-full sm:border-2 sm:border-primary">
          <h1 className="text-4xl font-semibold leading-9  text-darkshade ">
            Subscribe
          </h1>
          <p className="text-base leading-4 mt-2 text-primary ">
            Subscribe to our newsletter to get news about latest trends
          </p>
          <div className="sm:flex items-center mt-10 xl:pb-0 pb-32">
            <div className="flex items-center bg-gray-100 lg:w-96 w-full">
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
            </div>
            <button
              type="button"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-black text-base font-medium leading-none text-white py-4 px-6 bg-gray-800 sm:ml-2 sm:w-auto w-full sm:mt-0 mt-4  "
            >
              Subscribe
            </button>
          </div>
        </div>
        <div className="w-1/2 xl:block absolute hidden right-0 2xl:-mr-0 ">
          <Image
            src="/images/traveler.jpg.webp"
            alt="Picture of the author"
            width={200}
            height={200}
          />
        </div>
        <div className="w-full xl:hidden flex items-center justify-center xl:-mt-0 -mt-32 sm:px-0 px-4">
          <Image
            src="/images/traveler.jpg.webp"
            alt="Picture of the author"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}

export default Subscrib;
