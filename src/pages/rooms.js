import React from "react";
import Promo from "../components/elements/Promo";
import ReviewHero from "../components/elements/review/ReviewHero";
import Layout from "../components/global/Layout";
import RoomCard from "../components/roomCard/RoomCard";
import MockupRom from "../components/roomSection/MockupRom";

const rooms = () => {
  return (
    <Layout heroBgImage="/images/gallery-1.jpg.webp">
      <RoomCard />
      <MockupRom />
      <Promo />
      <ReviewHero />
    </Layout>
  );
};

export default rooms;
