import React from 'react';
import Card from './Card';
import Title from '../atoms/Title';

const RoomData = [
  {
    image: '/images/familyroom.webp',
    alt: 'room1',
    width: 400,
    height: 400,
    label: 'room',
    typeRoom: 'family room',
  },
  {
    image: '/images/standard room.webp',
    alt: 'room1',
    width: 400,
    height: 400,
    label: 'room',
    typeRoom: 'standard room',
  },
  {
    image: '/images/singleroom.webp',
    alt: 'room1',
    width: 400,
    height: 400,
    label: 'room',
    typeRoom: 'single room',
  },
  {
    image: '/images/luxryroom.webp',
    alt: 'room1',
    width: 400,
    height: 400,
    label: 'room',
    typeRoom: 'luxary room',
  },
  {
    image: '/images/singleroom.webp',
    alt: 'room1',
    width: 400,
    height: 400,
    label: 'room',
    typeRoom: 'single room',
  },
  {
    image: '/images/familyroom.webp',
    alt: 'room1',
    width: 400,
    height: 400,
    label: 'room',
    typeRoom: 'family room',
  },
];

import Subtitle from '../atoms/Subtitle';
const RoomCard = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="mx-auto text-center">
        <Title title="our rooms" />
        <Subtitle subtitle="rooms" />
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
        {RoomData.map((data) => (
          <Card
            key={data.id}
            image={data.image}
            alt={data.title}
            width={data.width}
            height={data.height}
            label={data.label}
            typeRoom={data.typeRoom}
          />
        ))}
      </div>
    </div>
  );
};

export default RoomCard;
