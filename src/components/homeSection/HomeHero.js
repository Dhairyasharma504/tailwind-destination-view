import React from 'react';
import ButtonPrimary from '../atoms/ButtonPrimary';
import HeroWrapper from '../global/HeroWrapper';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const data = [
  { id: 1, bgImage: '/images/bgimage1.jpg', title: 'Nature' },
  { id: 1, bgImage: '/images/hero_1.jpg.webp', title: 'Travel' },
  { id: 1, bgImage: '/images/banner.png.webp', title: 'Wedding' },
  { id: 1, bgImage: '/images/bgimage1.jpg', title: 'Wild' },
  { id: 1, bgImage: '/images/bgimage1.jpg', title: 'Other' },
];
const SliderItem = ({ item }) => (
  <HeroWrapper bgImage={item.bgImage}>
    <div className=" p-6  h-full flex flex-col justify-center items-start  w-full text-lightshade ">
      <div className="   md:w-3/4  xl:w-1/2 ">
        <p
          className="text-xl sm:text-2xl xl:text-5xl text-center md:text-left  font-extrabold  leading-6 xl:leading-10 text-lightshade pb-6"
          data-aos="fade-right"
        >
          Let&apos;s Enjoy The Wonders of {item.title}
        </p>
        <p className="mt-4  text-center md:text-left text-xl leading-normal text-lightshade">
          Looking to create a greater impact with your commercial Christmas
          display? Take a look at the services we have on offer...
        </p>
        <ButtonPrimary lable="explore now"></ButtonPrimary>
      </div>
    </div>
  </HeroWrapper>
);
const HomeHero = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    fade: true,
    pauseOnHover: false,
  };
  return (
    <Slider {...settings}>
      {data.map((item) => (
        <SliderItem key={item.id} item={item} />
      ))}
    </Slider>
  );
};

export default HomeHero;
