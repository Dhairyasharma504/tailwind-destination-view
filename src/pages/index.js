import React from 'react';
import Blog from '../components/Blog';
import DescoverStory from '../components/DescoverStory';
import Gallery from '../components/Gallery';
import Guidance from '../components/Guidance';

import Layout from '../components/Layout';
import Subscrib from '../components/Subscrib';

const index = () => {
  return (
    <div>
      <Layout>
        {/* <Pricing /> */}
        <DescoverStory /> <Guidance />
        <Gallery />
        <Blog />
        {/* <Team /> */}
        <Subscrib />
      </Layout>
    </div>
  );
};

export default index;
