import React from 'react';
import Blog from '../components/Blog';
// import DescoverStory from '../components/DescoverStory';
import Gallery from '../components/Gallery';
import Guidance from '../components/Guidance';
import dynamic from 'next/dynamic';

import Layout from '../components/global/Layout';
import Subscrib from '../components/Subscrib';
import ReviewHero from '../components/review/ReviewHero';

const DescoverStory = dynamic(() => import('../components/DescoverStory'), {
  ssr: false,
});

const index = () => {
  return (
    <div>
      <Layout isHome>
        {/* <Pricing /> */}
        <DescoverStory /> <Guidance />
        <Gallery />
        <Blog />
        <ReviewHero />
        {/* <Team /> */}
        <Subscrib />
      </Layout>
    </div>
  );
};

export default index;
