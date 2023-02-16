import React from "react";
import { CiCreditCard1 } from "react-icons/ci";
import { GiEgyptianProfile, GiThumbUp } from "react-icons/gi";
import { SiYourtraveldottv } from "react-icons/si";

const ItemData = [
  {
    icon: <GiEgyptianProfile />,
    text: "8000+ our local Guidance",
  },
  {
    icon: <CiCreditCard1 />,
    text: "100% Trusted Tour",
  },
  {
    icon: <SiYourtraveldottv />,
    text: "28+ Years of Travel",
  },
  {
    icon: <GiThumbUp />,
    text: "98% Our Travelers",
  },
];

function Guidance() {
  return (
    <div className="container mx-auto px-4 max-w-fit pb-10 ">
      <div className="grid  md:grid-cols-4  grid-cols-1 gap-8   mx-auto">
        {ItemData.map((data) => (
          <div
            key={data.item}
            className="group border-box p-8 justify-center hover:shadow-lg transform duration-700 "
          >
            <div className="">
              <div className=" mx-auto text-7xl pt-9 text-primary flex justify-center group-hover:text-brand  ">
                {data.icon}
              </div>
              <h3 className=" font-medium  mb-8 mt-8   text-center text-lg text-darkShade group-hover:text-brand">
                {data.text}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Guidance;
