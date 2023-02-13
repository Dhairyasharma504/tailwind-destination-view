import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
const ImageHover = ({
  title,
  subtitle,
  description,
  image,
  alt,
  width,
  height,
}) => {
  return (
    <div className=" overflow-hidden ">
      <Link href="#" className="group relative block bg-black">
        <Image
          src={image}
          alt={title}
          width={width}
          height={height}
          className="absolute inset-0 h-full w-full object-cover  opacity-80  group-hover:opacity-50 transition ease-in-out delay-150  group-hover:-translate-y-1 group-hover:scale-110  duration-700"
        />

        <div className="relative ">
          <div className=" group-hover:bg-white/20 p-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand truncate">
              {title}
            </p>

            <p className="text-xl  font-bold text-white truncate ">
              {subtitle}
            </p>
          </div>
          <div className="mt-64 p-4">
            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className=" text-clip overflow-hidden ... text-sm text-white">
                {description}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ImageHover;
