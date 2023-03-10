import React from "react";
import Image from "next/image";
import Link from "next/link";
import Subtitle from "../atoms/Subtitle";
import Title from "../atoms/Title";
import ButtonPrimary from "../atoms/ButtonPrimary";
import SliderComponent from "../elements/Slider_Hero";

function RoomDetails({ item }) {
  return (
    <div className=" bg-lightShade w-full text-center p-4 space-y-8 flex flex-col justify-center">
      <div>
        <Title title="Take advantage of our seasonal specials." />

        <Subtitle
          hasTextBlack
          subtitle="The concept and service of the best luxury hotels in Asturias in our sophisticated Urban Double and Unique Junior Suite rooms, with the possibility of enjoying a furnished terrace in our Double Urban Loft and Unique Junior Loft Suite."
        />
      </div>
      <div className=" mx-auto">
        <Link href="/rooms">
          <ButtonPrimary borderBlack bgBlack label="Best Rooms" />
        </Link>
      </div>
    </div>
  );
}

function MockupRom() {
  return (
    <div className="container mx-auto px-4 p-20 ">
      <div className=" grid md:grid-cols-2 grid-cols-1 max-w-screen-lg mx-auto items-center">
        <div className="w-full">
          <Image
            src="/images/project-img.jpg.webp"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
        <div>
          <SliderComponent
            data={[1, 2, 3]}
            rowItem={(item) => <RoomDetails item={item} />}
            slidesToShow={1}
          />
        </div>
      </div>
    </div>
  );
}

export default MockupRom;
