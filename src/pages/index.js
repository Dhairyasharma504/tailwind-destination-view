import React from 'react';
import Blog from '../components/homeSection/Blog';
// import DescoverStory from '../components/DescoverStory';

import Guidance from '../components/homeSection/Guidance';
import dynamic from 'next/dynamic';

import Layout from '../components/global/Layout';
import Subscrib from '../components/homeSection/Subscrib';
import ReviewHero from '../components/elements/review/ReviewHero';
import GallerySection from '../components/elements/gallery/GallerySection';
import Promo from '../components/elements/Promo';

const DescoverStory = dynamic(
  () => import('../components/homeSection/DescoverStory'),
  {
    ssr: false,
  },
);

const index = () => {
  return (
    <div>
      <Layout isHome>
        {/* <Pricing /> */}
        <DescoverStory /> <Guidance />
        <GallerySection />
        <Blog />
        <Promo />
        <ReviewHero />
        {/* <Team /> */}
        <Subscrib />
      </Layout>
    </div>
  );
};

export default index;
