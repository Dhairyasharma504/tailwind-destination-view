import React from 'react';

const TeamCard = () => {
  return (
    <div>
      <div class="relative rounded  shadow-md bg-white">
        <div class="absolute  left-40 -top-36 ">
          <div class="h-32 w-32">
            <img
              src="https://cdn.tuk.dev/assets/photo-1530577197743-7adf14294584.jfif"
              alt="Display Picture of Silene Tokyo"
              role="img"
              class="rounded-full object-cover h-full w-full shadow-md"
            />
          </div>
        </div>
        <div class="px-6 mt-16">
          <h1 class="font-bold dark:text-white text-3xl text-center mb-1">
            Silene Tokyo
          </h1>
          <p class="text-gray-800 dark:text-white text-sm text-center">
            Product Design Head
          </p>
          <p class="text-center text-gray-600 dark:text-gray-200 text-base pt-3 font-normal">
            The emphasis on innovation and technology in our companies has
            resulted in a few of them establishing global benchmarks in product
            design and development.
          </p>
          <div class="w-full flex justify-center pt-5 pb-5">
            <a href="javascript:void(0)" class="mx-5">
              <div aria-label="Github" role="img">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg"
                  alt="github"
                />
              </div>
            </a>
            <a href="javascript:void(0)" class="mx-5">
              <div aria-label="Twitter" role="img">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg2.svg"
                  alt="twitter"
                />
              </div>
            </a>
            <a href="javascript:void(0)" class="mx-5">
              <div aria-label="Instagram" role="img">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg3.svg"
                  alt="instagram"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
