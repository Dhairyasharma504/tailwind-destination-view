import React from 'react';
import Title from './atoms/Title';
import Texthero from './elements/Texthero';

const Gallery = () => {
  return (
    <div>
      <div className="mx-auto text-center">
        <Texthero title="Favourite Places" heading="FEATURED TOURS Views" />
      </div>
      <section className="overflow-hidden text-gray-700">
        <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="flex flex-wrap w-1/2">
              <div className="w-1/2 p-1 md:p-2 ">
                <img
                  alt="gallery"
                  className="block relative object-cover object-center w-full h-full rounded-lg transition ease-in-out  hover:-translate-y-1 hover:scale-105  duration-500 "
                  src="/images/services1.jpg.webp"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="/images/services2.jpg.webp"
                />
              </div>
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="/images/home-blog2.jpg"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="/images/home-blog1.jpg"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="/images/services5.jpg.webp"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="/images/services6.jpg.webp"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
