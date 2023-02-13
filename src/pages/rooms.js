import React from 'react';
import ReviewHero from '../components/elements/review/ReviewHero';
import Layout from '../components/global/Layout';
import RoomCard from '../components/roomCard/RoomCard';
import MockupRom from '../components/roomSection/MockupRom';

const rooms = () => {
  return (
    <Layout heroBgImage="/images/2.png.webp">
      <RoomCard />
      <MockupRom />
      <ReviewHero />
    </Layout>
  );
};

export default rooms;
