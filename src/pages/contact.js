import React from 'react';
import Contact from '../components/Contact';
import Layout from '../components/global/Layout';

const contact = () => {
  return (
    <div>
      <Layout heroBgImage="images/bg_1.jpg.webp">
        <div>
          <Contact />
        </div>
      </Layout>
    </div>
  );
};

export default contact;
