// import Link from "next/link";
import React from "react";

function ButtonPrimary({ label, bgBlack, borderBlack }) {
  return (
    <button
      type="button"
      className={`${
        bgBlack ? " bg-darkShade" : "bg-transparent"
      } mt-6 w-full uppercase md:w-auto  lg:mt-8 py-2 md:py-3 px-10 duration-700 text-base border-2 ${
        borderBlack ? "border-darkShade" : " border-lightShade"
      } transition text-lightShade hover:!-translate-y-1 hover:!bg-lightShade hover:text-gray-800 font-medium `}
    >
      {label}
    </button>
  );
}

export default ButtonPrimary;
