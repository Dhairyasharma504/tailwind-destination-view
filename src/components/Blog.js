import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Title from '../components/atoms/Title';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import Subtitle from './atoms/Subtitle';
const blogs = [
  {
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.',
    link: '/',
    image: '/images/support-img.jpg.webp',
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.',
    link: '/',
    image: '/images/support-img.jpg.webp',
  },
  {
    title: 'Lorem ipsum dolor sit amet ',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.',
    link: '/',
    image: '/images/support-img.jpg.webp',
  },
];

const Blog = () => {
  return (
    <div>
      <div className="mx-auto container my-8   relative px-2">
        <div className="mx-auto text-center">
          <Title title="Our blogs" />
          <Subtitle subtitle="updates" />
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-12 p-8">
          {blogs.map((item) => (
            <div
              key={item.id}
              className=" group cursor-pointer rounded-lg bg-secondcolor "
            >
              <div className="mx-auto mb-10">
                <div className=" max-h-[450px] overflow-hidden relative">
                  <div className=" overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={500}
                      height={500}
                      className="transition ease-in-out delay-150  group-hover:-translate-y-1 group-hover:scale-110  duration-500"
                    />
                  </div>
                  <div className="bg-brand absolute top-0 left-0">
                    <p className="text-base leading-4 py-3 px-5  text-lightshade  ">
                      topic
                    </p>
                  </div>
                </div>

                <div className="p-2 relative  ">
                  <div className="block p-3">
                    <div className="flex  justify-between py-3 ">
                      <p className="text-base font-light leading-4 text-secondary  mt-6 group-hover:underline">
                        dhairya
                      </p>
                      <p className="text-base uppercase font-light leading-4 text-gray-800  mt-6 ">
                        6/feb/23
                      </p>
                    </div>
                    <h3 className="truncate transition tracking-wide duration-300 font-normal leading-10  text-2xl text-darkshade hover:text-lightshade group-hover:underline">
                      {item.title}
                    </h3>
                    <p className="font-normal my-3   text-primary  text-l text-base leading-7">
                      {item.description}
                    </p>
                  </div>
                  <div className=" flex  px-3 ">
                    <Link
                      href={item.link}
                      className="  focus:outline-none flex items-center justify-between w-72 mt-6 bg-gray-800 dark:bg-white dark:hover:bg-gray-100 p-4 hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
                    >
                      <p className="text-base font-medium leading-4 text-white dark:text-gray-900">
                        Read more
                      </p>
                      {/* <Image
                        className="dark:hidden"
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/blog-IV-svg1.svg"
                        alt="arrow"
                        width={20}
                        height={20}
                      /> */}

                      <HiOutlineArrowNarrowRight className=" text-lightshade items-center" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
