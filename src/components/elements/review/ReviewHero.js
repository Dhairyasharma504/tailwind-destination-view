import React from "react";
import SliderComponent from "../Slider_Hero";
import ReviewElement from "./ReviewElement";
import Subtitle from "../../atoms/Subtitle";
import Title from "../../atoms/Title";

const reviewHero = [
  {
    id: 1,
    name: "samual",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quae expedita fugiat quo incidunt, possimus temporibus aperiam eum, quaerat sapiente.",
    createdAt: "20 aug",
    image: "/images/person_2.jpg.webp",
  },
  {
    id: 2,
    name: "prabh",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quae expedita fugiat quo incidunt, possimus temporibus aperiam eum, quaerat sapiente.",
    createdAt: "20 aug",
    image: "/images/person_1.jpg.webp",
  },
  {
    id: 3,
    name: "harry",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quae expedita fugiat quo incidunt, possimus temporibus aperiam eum, quaerat sapiente.",
    createdAt: "24 dec",
    image: "/images/person_1.jpg.webp",
  },
  {
    id: 4,
    name: "lucifer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quae expedita fugiat quo incidunt, possimus temporibus aperiam eum, quaerat sapiente.",
    createdAt: "30 aug",
    image: "/images/person_2.jpg.webp",
  },
];
function ReviewHero() {
  return (
    <div
      className="container
mx-auto  px-4"
    >
      <div>
        <div className="mx-auto text-center">
          <Title title="customer review" />
          <Subtitle subtitle="review" />
        </div>
      </div>
      <SliderComponent
        rowItem={(item) => <ReviewElement key={item.id} item={item} />}
        data={reviewHero}
      />
    </div>
  );
}

export default ReviewHero;
