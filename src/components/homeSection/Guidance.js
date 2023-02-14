import React from 'react';
import { CiCreditCard1 } from 'react-icons/ci';
import { GiEgyptianProfile, GiThumbUp } from 'react-icons/gi';
import { SiYourtraveldottv } from 'react-icons/si';

const ItemData = [
  {
    icon: <GiEgyptianProfile></GiEgyptianProfile>,
    text: '8000+ our local Guidance',
  },
  {
    icon: <CiCreditCard1></CiCreditCard1>,
    text: '100% Trusted Tour',
  },
  {
    icon: <SiYourtraveldottv></SiYourtraveldottv>,
    text: '28+ Years of Travel',
  },
  {
    icon: <GiThumbUp></GiThumbUp>,
    text: '98% Our Travelers',
  },
];

const Guidance = () => {
  return (
    <div className="container mx-auto px-4 max-w-fit  py-5 ">
      <div className="grid  md:grid-cols-4  grid-cols-1 gap-8   mx-auto">
        {ItemData.map((data) => (
          <div
            key={data.item}
            className="group border-box p-8 justify-center hover:shadow-lg transform duration-700 "
          >
            <div
              className=""
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
            >
              <div className=" mx-auto text-7xl pt-9 text-primary flex justify-center group-hover:text-brand  ">
                {data.icon}
              </div>
              <h3 className=" font-semibold  mb-8 mt-8 font-primary   text-center text-lg text-darkshade group-hover:text-brand">
                {data.text}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guidance;
