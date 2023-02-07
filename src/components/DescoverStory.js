import React from 'react';
import Title from '../components/atoms/Title';
import Description from './atoms/Description';
import Subtitle from './atoms/Subtitle';
import Image from 'next/image';

const DescoverStory = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid  md:grid-cols-2 grid-cols-1">
        <div className="py-40 px-4 ">
          <Title title="DISCOVER STORY" />
          <Subtitle subtitle="Our Story" />
          <Description text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quae expedita fugiat quo incidunt, possimus temporibus aperiam eum, quaerat sapiente." />
          <span>
            <Description text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos debitis enim a pariatur molestiae." />
          </span>
        </div>
        <div className="">
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
