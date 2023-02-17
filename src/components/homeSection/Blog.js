import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Title from "../atoms/Title";
import Subtitle from "../atoms/Subtitle";

const blogs = [
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.",
    link: "/",
    image: "/images/home-blog2.jpg",
    name: "Dhairya",
    createdAt: "2023 dec ",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.",
    link: "/",
    image: "/images/home-blog1.jpg",
    name: "Dhairya",
    createdAt: "2023 dec ",
  },
  {
    title: "Lorem ipsum dolor sit amet ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.",
    link: "/",
    image: "/images/home-blog2.jpg",
    name: "Dhairya",
    createdAt: "2023 dec ",
  },
];

function Blog() {
  return (
    <div>
      <div className="mx-auto container my-4   relative px-2">
        <div className="mx-auto text-center">
          <Title title="Our blogs" />
          <Subtitle subtitle="updates" />
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6 p-8">
          {blogs.map((item) => (
            <div
              key={item.id}
              className=" group cursor-pointer  rounded-lg    hover:duration-500     "
              data-aos="flip-left"
              data-aos-duration="2500"
              data-aos-delay="100"
            >
              <div className="mx-auto mb-10">
                <div className=" max-h-[250px] overflow-hidden relative">
                  <div className=" overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={500}
                      height={500}
                      className="transition ease-in-out  delay-75  group-hover:-translate-y-1 group-hover:scale-110  duration-700"
                    />
                  </div>
                  <div className="bg-brand absolute top-0 left-0">
                    <p className="text-base leading-4 py-3 px-5  text-lightShade  ">
                      topic
                    </p>
                  </div>
                </div>

                <div className="px-2 py-5 relative  group-hover:bg-gray-100/70 duration-700 delay-200 ">
                  <div className="block p-3">
                    <div className="flex  justify-between py-3 ">
                      <p className="text-base font-light leading-4 mt-6 group-hover:underline">
                        {item.name}
                      </p>
                      <p className="text-base uppercase font-light leading-4 text-gray-800  mt-6 ">
                        {item.createdAt}
                      </p>
                    </div>
                    <h3 className="truncate transition tracking-wide duration-300 font-normal leading-10  text-2xl text-darkShade  group-hover:underline">
                      {item.title}
                    </h3>
                    <p className="font-normal my-3   text-primary text-base leading-7">
                      {item.description}
                    </p>
                  </div>
                  <div className=" flex  px-3 ">
                    <Link
                      href={item.link}
                      className="  focus:outline-none flex items-center justify-between w-72 mt-6 bg-gray-800 p-4 hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
                    >
                      <p className="text-base font-medium leading-4 text-white ">
                        Read more
                      </p>

                      <HiOutlineArrowNarrowRight className=" text-lightShade items-center" />
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
}

export default Blog;
