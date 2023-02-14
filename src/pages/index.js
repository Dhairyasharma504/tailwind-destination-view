import React, { useEffect } from 'react';
import Blog from '../components/homeSection/Blog';
// import DescoverStory from '../components/DescoverStory';

import Guidance from '../components/homeSection/Guidance';
import dynamic from 'next/dynamic';

import Layout from '../components/global/Layout';
import Subscrib from '../components/homeSection/Subscrib';
import ReviewHero from '../components/elements/review/ReviewHero';
import GallerySection from '../components/elements/gallery/GallerySection';
import Promo from '../components/elements/Promo';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Subscribe from '../components/Subscribe';

const DescoverStory = dynamic(
  () => import('../components/homeSection/DescoverStory'),
  {
    ssr: false,
  },
);

const index = () => {
  useEffect(() => {
    AOS?.init();
    AOS?.refresh();
  }, []);

  return (
    <div>
      <Layout isHome>
        {/* <Pricing /> */}

        <DescoverStory />

        <GallerySection />

        <Blog />
        <Guidance />
        <Promo />
        <ReviewHero />
        {/* <Team /> */}
        {/* <Subscrib /> */}
        <Subscribe />
      </Layout>
    </div>
  );
};

export default index;
