import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Card = ({ image, alt, width, height, label, typeRoom }) => {
  return (
    <div>
      <Link href="/">
        <div className="flex flex-col">
          <div className="flex flex-col justify-center">
            <div className="relative">
              <Image src={image} alt={alt} width={width} height={height} />
              <div className="bg-brand absolute top-0 left-0">
                <p className="text-base leading-4 py-3 px-5  text-lightshade uppercase  ">
                  {label}
                </p>
              </div>
              <div className="absolute sm:bottom-8 bottom-4 pr-10 sm:pr-0 left-4 sm:left-8 flex justify-start items-start ">
                <div className="bg-white/20 p-4">
                  <p className="text-lg sm:text-xl font-bold leading-9 text-white capitalize">
                    {typeRoom}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
