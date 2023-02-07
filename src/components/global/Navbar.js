import React, { useState } from 'react';
import Link from 'next/link';
import { HiMenuAlt3 } from 'react-icons/hi';

const navItems = [
  {
    lable: 'Home',
    link: '/',
  },
  {
    lable: 'Destinations',
    link: '/destination',
  },
  {
    lable: 'Reservations',
    link: '/',
  },
  {
    lable: 'Amenities',
    link: '/',
  },
  {
    lable: 'Rooms',
    link: '/rooms',
  },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="absolute w-full flex justify-between p-4 items-center ">
      <Link href="/">
        <h1 className="text-white font-bold text-2xl z-20 cursor-pointer font-primary  hover:text-brand">
          Experiences
        </h1>
      </Link>
      <HiMenuAlt3
        onClick={handleNav}
        className="z-20 text-white  cursor-pointer"
        size={25}
      />
      <div
        className={
          nav
            ? 'ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-brand/95 px-4 py-7 flex-col z-10'
            : 'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10'
        }
      >
        <ul className="flex flex-col fixed w-full h-full items-center justify-center">
          {navItems.map((data) => (
            <div
              key={data.lable}
              className="font-bold text-3xl p-8 hover:underline  hover:text-primary "
            >
              <Link href={data.link}>{data.lable}</Link>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
