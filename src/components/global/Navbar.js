import React, { useState } from "react";
import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const navItems = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Rooms",
    link: "/rooms",
  },
  {
    label: "Destinations",
    link: "/destination",
  },

  {
    label: "contact",
    link: "/contact",
  },
];

function Navbar() {
  const [nav, setNav] = useState(false);

  return (
    <div className="absolute w-full flex justify-between p-4 items-center">
      <Link href="/">
        <h1 className="text-white font-bold text-2xl z-20 cursor-pointer font-primary  hover:text-brand">
          Experiences
        </h1>
      </Link>
      {/* <HiMenuAlt3
        onClick={handleNav}
        className="z-20 text-white  cursor-pointer"
        size={25}
      /> */}

      <button
        type="button"
        className="z-40  cursor-pointer"
        onClick={() => setNav(!nav)}
      >
        {nav ? (
          <RxCross2 className="h-10 w-10   text-white" />
        ) : (
          <HiMenuAlt3 className="h-10 w-10  text-white" />
        )}
      </button>
      <div
        className={
          nav
            ? "ease-in duration-300 fixed  left-0 top-0 w-full h-screen bg-black/95 px-4 py-7 flex-col z-30"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500 z-30"
        }
      >
        <ul className="flex flex-col fixed w-full h-full items-center justify-center ">
          {navItems.map((data) => (
            <div
              key={data.label}
              className="m-8 relative font-medium  text-lightShade md:text-3xl text-lg hover:text-brand before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-brand before:transition hover:before:scale-x-100 "
            >
              <Link href={data.link}>{data.label}</Link>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
