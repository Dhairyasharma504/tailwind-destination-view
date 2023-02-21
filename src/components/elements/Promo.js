import React from "react";
import ButtonPrimary from "../atoms/ButtonPrimary";

function Promo() {
  return (
    <div>
      <div className="  pb-10 ">
        <div className="bg-[url('/images/promoView.webp')] bg-cover bg-no-repeat bg-fixed  ">
          <div className="  bg-black/30 items-center grid md:grid-cols-2 grid-cols-1 gap-3  mx-auto py-24 px-10">
            <div className=" text-4xl font-semibold capitalize flex items-center  text-lightShade md:text-left text-center ">
              <span className="mr-5">Summer Promo 50% Off</span>
              <span className=" ">
                <ButtonPrimary label="avail now" />
              </span>
            </div>
            <div className="  flex justify-end  flex-col ">
              <span className=" max-w-3xl text-xl uppercase font-semibold text-lightShade  md:text-end text-center">
                THE PROMO WILL START IN
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Promo;
