import React from 'react';
import ButtonPrimary from '../atoms/ButtonPrimary';

const Promo = () => {
  return (
    <div className=" container mx-auto pb-10">
      <div class="bg-[url('/images/promo.webp')] bg-cover bg-no-repeat bg-fixed">
        <div className=" grid md:grid-cols-2 grid-cols-1 gap-3  mx-auto py-24 px-10">
          <div className=" text-4xl font-semibold capitalize text-lightshade md:text-left text-center ">
            <span>Summer Promo 50% Off</span>
            <span className="">
              <ButtonPrimary lable="avail now" />
            </span>
          </div>{' '}
          <div className="  flex justify-end  flex-col">
            <span className=" max-w-3xl text-xl uppercase font-semibold text-lightshade  md:text-end text-center">
              {' '}
              THE PROMO WILL START IN
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
