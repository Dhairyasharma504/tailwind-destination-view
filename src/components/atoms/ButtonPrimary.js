import React from 'react';

const ButtonPrimary = ({ lable }) => {
  return (
    <div>
      <button class="mt-6 shrink-0 w-full uppercase md:w-auto  lg:mt-8 py-2 md:py-3 px-10 flex justify-center duration-700  items-center text-base border-2 border-white transition hover:-translate-y-1 hover:bg-gray-100 hover:text-gray-800 font-medium text-white">
        {lable}
      </button>
    </div>
  );
};

export default ButtonPrimary;
