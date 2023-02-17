import React from "react";
import dynamic from "next/dynamic";
import Blog from "../components/homeSection/Blog";

import Guidance from "../components/homeSection/Guidance";

import Layout from "../components/global/Layout";
import ReviewHero from "../components/elements/review/ReviewHero";
import GallerySection from "../components/elements/gallery/GallerySection";
import Promo from "../components/elements/Promo";
import Subscribe from "../components/Subscribe";

const DiscoverStory = dynamic(
  () => import("../components/homeSection/DescoverStory"),
  {
    ssr: false,
  },
);

function index() {
  return (
    <div>
      <Layout isHome>
        {/* <Pricing /> */}

        <DiscoverStory />

        <GallerySection />

        <Blog />
        <Guidance />
        <Promo />
        <ReviewHero />
        {/* <Team /> */}
        <Subscribe />
      </Layout>
    </div>
  );
}

export default index;
