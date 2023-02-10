import React from 'react';
import SliderComponent from '../elements/Slider_Hero';
import ReviewElement from './ReviewElement';
import Subtitle from '../atoms/Subtitle';
import Title from '../atoms/Title';
const reviewHero = [
  {
    id: 1,
    name: 'Happy',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quae expedita fugiat quo incidunt, possimus temporibus aperiam eum, quaerat sapiente.',
    createdAt: '20 aug',
    image: '/images/person_2.jpg.webp',
  },
  {
    id: 1,
    name: 'vishal',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quae expedita fugiat quo incidunt, possimus temporibus aperiam eum, quaerat sapiente.',
    createdAt: '20 aug',
    image: '/images/person_1.jpg.webp',
  },
  {
    id: 2,
    name: 'vishal',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quae expedita fugiat quo incidunt, possimus temporibus aperiam eum, quaerat sapiente.',
    createdAt: '24 dec',
    image: '/images/person_1.jpg.webp',
  },
  {
    id: 3,
    name: 'dhairya',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quae expedita fugiat quo incidunt, possimus temporibus aperiam eum, quaerat sapiente.',
    createdAt: '30 aug',
    image: '/images/person_2.jpg.webp',
  },
];
const ReviewHero = () => {
  return (
    <div className="container mx-auto  px-4">
      <div>
        <div className="mx-auto text-center">
          <Title title="customer review" />
          <Subtitle subtitle="review" />
        </div>
      </div>
      <SliderComponent
        title="Our Pricing"
        heading="Lorem Ipsum"
        rowItem={(item) => <ReviewElement item={item} />}
        data={reviewHero}
      ></SliderComponent>
    </div>
  );
};

export default ReviewHero;
