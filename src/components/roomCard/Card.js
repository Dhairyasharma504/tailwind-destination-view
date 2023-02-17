import Link from "next/link";
import React from "react";
import Image from "next/image";

function Card({ item, image, alt, width, height, label, typeRoom }) {
  return (
    <div>
      <Link href={`/room/${item.id}`}>
        <div className="flex flex-col">
          <div className="flex flex-col justify-center">
            <div className="relative">
              <Image src={image} alt={alt} width={width} height={height} />
              <div className="bg-brand absolute top-0 left-0 z-10">
                <p className="text-base leading-4 py-3 px-5  text-lightShade uppercase  ">
                  {label}
                </p>
              </div>
              <div className=" group duration-700">
                <div className=" bg-black/10 group-hover:bg-black/50  duration-700  h-full w-full  absolute inset-0  z-0 ">
                  <div className=" bg-white/25   py-4 px-16 absolute bottom-4  left-4 z-20   ">
                    <p className="text-lg sm:text-xl font-bold leading-9 text-white capitalize transition ease-in-out   group-hover:translate-x-6   duration-700">
                      {typeRoom}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
