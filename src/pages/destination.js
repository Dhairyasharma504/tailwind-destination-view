import React from "react";
import Layout from "../components/global/Layout";
import ReviewHero from "../components/elements/review/ReviewHero";
import GallerySection from "../components/elements/gallery/GallerySection";
import Guidance from "../components/homeSection/Guidance";
import Promo from "../components/elements/Promo";

const destination = () => {
  return (
    <div>
      <Layout heroBgImage="images/bg_1.jpg.webp">
        <Guidance />
        <GallerySection />
        <Promo />
        <ReviewHero />
      </Layout>
    </div>
  );
};

export default destination;
