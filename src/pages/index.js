import React from 'react';
import Blog from '../components/Blog';
import DescoverStory from '../components/DescoverStory';
import Gallery from '../components/Gallery';
import Guidance from '../components/Guidance';

import Layout from '../components/Layout';

import Pricing from '../components/Pricing';
import Team from '../components/team';

const index = () => {
  return (
    <div>
      <Layout>
        {/* <Pricing /> */}
        <DescoverStory /> <Guidance />
        <Gallery />
        <Blog />
        {/* <Team /> */}
      </Layout>
    </div>
  );
};

export default index;
