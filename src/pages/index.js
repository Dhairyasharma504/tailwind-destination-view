import React from 'react';
import Blog from '../components/Blog';
import DescoverStory from '../components/DescoverStory';
import Gallery from '../components/Gallery';
import Guidance from '../components/Guidance';

import Layout from '../components/global/Layout';
import Subscrib from '../components/Subscrib';
import Test from '../components/Test';

const index = () => {
  return (
    <div>
      <Layout isHome>
        {/* <Pricing /> */}
        <DescoverStory /> <Guidance />
        <Gallery />
        <Blog />
        <Test />
        {/* <Team /> */}
        <Subscrib />
      </Layout>
    </div>
  );
};

export default index;
