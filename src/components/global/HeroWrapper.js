import React from 'react';

const HeroWrapper = ({ bgImage, isSmall, children }) => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${
            bgImage ? bgImage : '/images/hero_1.jpg.webp'
          })`,
        }}
        className={`w-full ${
          isSmall ? 'md:h-[50vh] h-[50vh]' : 'md:h-[90vh] h-[100vh]'
        } top-0 left-0 bg-cover`}
      >
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default HeroWrapper;
