import React, { useEffect } from "react";
import Slider from "react-slick";
import AOS from "aos";

import ButtonPrimary from "../atoms/ButtonPrimary";
import HeroWrapper from "../global/HeroWrapper";

const data = [
  { id: 1, bgImage: "/images/bg_1.jpg.webp", title: "Nature" },
  { id: 1, bgImage: "/images/gallery-1.jpg.webp", title: "Travel" },
  { id: 1, bgImage: "/images/banner.webp", title: "Wedding" },
  { id: 1, bgImage: "/images/2.png.webp", title: "Wild" },
];
function SliderItem({ item }) {
  return (
    <HeroWrapper bgImage={item.bgImage}>
      <div className="bg-black/40 md:h-[80vh] h-[100vh]">
        <div className="  p-6  h-full flex flex-col justify-center items-start  w-full text-lightshade ">
          <div
            className="md:w-3/4  xl:w-1/2  "
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="800"
          >
            <p className=" text-xl md:text-5xl font-extrabold text-lightshade md:text-left text-center">
              Let&apos;s Enjoy The Wonders of {item.title}
            </p>
            <p className="mt-4  text-center md:text-left  text-base md:text-lg leading-normal text-lightshade">
              Looking to create a greater impact with your commercial Christmas
              display? Take a look at the services we have on offer...
            </p>
            <ButtonPrimary lable="explore now" />
          </div>
        </div>
      </div>
    </HeroWrapper>
  );
}
function HomeHero() {
  useEffect(() => {
    AOS?.init();
    AOS?.refresh();
  }, []);

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
}

export default HomeHero;
