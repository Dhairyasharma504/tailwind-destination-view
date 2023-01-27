import React from 'react';
import Guidance from '../components/Guidance';

import Layout from '../components/Layout';

import Pricing from '../components/Pricing';

const index = () => {
  return (
    <div>
      <Layout>
        <Pricing />
        <Guidance />
      </Layout>
    </div>
  );
};

export default index;
