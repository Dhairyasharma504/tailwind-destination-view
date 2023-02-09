import React from 'react';
import HeroWrapper from './HeroWrapper';
import { useRouter } from 'next/router';

const Hero = ({ bgImage }) => {
  const router = useRouter();
  console.log('router', router);
  return (
    <HeroWrapper bgImage={bgImage} isSmall>
      <div className="max-w-xl -z-10 space-y-6  sm:text-center text-center mx-auto">
        <p className="pt-16 pl-16 ">
          Home &gt;{' '}
          <span className="capitalize">{router?.asPath?.replace('/', '')}</span>
        </p>
      </div>
    </HeroWrapper>
  );
};

export default Hero;
