import React from 'react';
import Blog from '../components/Blog';
// import DescoverStory from '../components/DescoverStory';

import Guidance from '../components/Guidance';
import dynamic from 'next/dynamic';

import Layout from '../components/global/Layout';
import Subscrib from '../components/Subscrib';
import ReviewHero from '../components/review/ReviewHero';
import GallerySection from '../components/gallery/GallerySection';

const DescoverStory = dynamic(() => import('../components/DescoverStory'), {
  ssr: false,
});

const index = () => {
  return (
    <div>
      <Layout isHome>
        {/* <Pricing /> */}
        <DescoverStory /> <Guidance />
        <GallerySection />
        <Blog />
        <ReviewHero />
        {/* <Team /> */}
        <Subscrib />
      </Layout>
    </div>
  );
};

export default index;
