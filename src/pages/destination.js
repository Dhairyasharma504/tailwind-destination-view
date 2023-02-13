import React from 'react';
import Layout from '../components/global/Layout';
import ReviewHero from '../components/elements/review/ReviewHero';
import GallerySection from '../components/elements/gallery/GallerySection';
import Guidance from '../../src/components/homeSection/Guidance';

const destination = () => {
  return (
    <div>
      <Layout heroBgImage="/images/1.png.webp">
        <Guidance />
        <GallerySection />
      </Layout>
    </div>
  );
};

export default destination;
