import React from 'react';
import HeroWrapper from './HeroWrapper';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Hero = ({ bgImage }) => {
  const router = useRouter();
  // console.log('router', router);
  return (
    <HeroWrapper bgImage={bgImage} isSmall>
      <div className="bg-black/25 md:h-[65vh] h-[65vh]">
        <div className="  max-w-xl -z-10 space-y-6  sm:text-center text-center mx-auto">
          <p className="pt-48 pl-16 text-lg font-semibold  font-primary opacity-90">
            <Link href="/">Home &gt;</Link>
            <span className="capitalize text-lightshade ">
              {router?.asPath?.replace('/', '')}
            </span>
          </p>
        </div>
      </div>
    </HeroWrapper>
  );
};

export default Hero;
