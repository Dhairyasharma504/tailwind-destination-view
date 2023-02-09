import React from 'react';
import Title from '../components/atoms/Title';
import Description from './atoms/Description';
import Subtitle from './atoms/Subtitle';
import Image from 'next/image';

const DescoverStory = () => {
  return (
    <div className="container mx-auto ">
      <div className="grid  md:grid-cols-2 grid-cols-1 py-9">
        <div
          className="flex flex-col justify-center px-12  "
          data-aos="fade-down"
        >
          <Title title="DISCOVER STORY" />
          <Subtitle subtitle="Our Story" />
          <Description text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quae expedita fugiat quo incidunt, possimus temporibus aperiam eum, quaerat sapiente." />
          <span>
            <Description text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos debitis enim a pariatur molestiae." />
          </span>
        </div>
        <div
          className=""
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-delay="100"
          data-aos-offset="120"
        >
          <Image
            src="/images/traveler.jpg.webp"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default DescoverStory;
