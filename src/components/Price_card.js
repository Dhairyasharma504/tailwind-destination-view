import React from "react";

function PriceCard({ item }) {
  return (
    <div className="px-4">
      <div className=" min-w-full p-8 bg-secondcolor ">
        <h5 className="text-lg text-center   font-semibold uppercase  leading-loose text-darkShade">
          {item.name}
        </h5>
        <h5 className=" text-7xl text-center font-extrabold uppercase  leading-loose text-brand">
          $ {item.price}
        </h5>
        <p className=" text-base tracking-normal text-center font-medium  text-lightShade leading-8 group-hover:text-white">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
        <button
          type="button"
          className="secondary-button mx-auto mt-7 py-3 shadow-sm border border-darkShade w-1/2 hover:bg-brand hover:border-brand hover:text-secondcolor "
        >
          get Started
        </button>
      </div>
    </div>
  );
}

export default PriceCard;
