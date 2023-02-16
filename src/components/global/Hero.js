import React from "react";
import { TfiHome } from "react-icons/tfi";
import { useRouter } from "next/router";
import Link from "next/link";
import HeroWrapper from "./HeroWrapper";

function Hero({ bgImage }) {
  const router = useRouter();
  // console.log('router', router);
  return (
    <HeroWrapper bgImage={bgImage} isSmall>
      <div className="bg-black/40 md:h-[65vh] h-[65vh] ">
        <div className=" ">
          <p className="  ">
            <div className="  ">
              <div className="  flex  justify-center">
                <span className=" text-lightshade">
                  <TfiHome className=" text-lightshade w-6 h-6" />
                </span>
                <span> Home &gt;</span>

                <span className="capitalize text-lightshade ">
                  {router?.asPath?.replace("/", "")}
                </span>
              </div>
            </div>
          </p>
        </div>
      </div>
    </HeroWrapper>
  );
}

export default Hero;
