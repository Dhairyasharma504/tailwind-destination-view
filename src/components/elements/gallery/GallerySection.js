import React from 'react';
import Subtitle from '../../atoms/Subtitle';
import Title from '../../atoms/Title';
import ImageHover from './ImageHover';
const GallerySection = () => {
  return (
    <div>
      <div className="container mx-auto px-4  pb-8  ">
        {/* <div className="mx-auto text-center ">
        <Texthero title="Favourite Places" heading="FEATURED TOURS Views" />
      </div> */}

        <div className="mx-auto text-center">
          <Title title="Favourite Places" />

          <Subtitle subtitle="FEATURED TOURS Views" />
        </div>
        <section className="overflow-hidden text-gray-700 ">
          <div className="container  mx-auto ">
            <div className="flex flex-wrap -m-1 md:-m-2">
              <div className="flex flex-wrap md:w-1/2 w-full">
                <div className="md:w-1/2 w-full p-1 md:p-2 overflow-hidden  ">
                  <ImageHover
                    title="himachal"
                    subtitle=" FEATURED TOURS "
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur."
                    image="/images/home-blog2.jpg"
                    width={400}
                    height={400}
                  />
                </div>

                <div className="md:w-1/2 w-full p-1 md:p-2">
                  <ImageHover
                    title="himachal"
                    subtitle=" FEATURED TOURS "
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur."
                    image="/images/home-blog1.jpg"
                    width={400}
                    height={600}
                  />
                </div>
                <div className="w-full p-1 md:p-2">
                  <ImageHover
                    title="himachal"
                    subtitle=" FEATURED TOURS "
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur."
                    image="/images/h1_hero.jpg.webp"
                    width={400}
                    height={400}
                  />
                </div>
              </div>
              <div className="flex flex-wrap md:w-1/2 w-full ">
                <div className="w-full p-1 md:p-2">
                  <ImageHover
                    title="himachal"
                    subtitle=" FEATURED TOURS"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur."
                    image="/images/services3.jpg.webp"
                    width={400}
                    height={400}
                  />
                </div>
                <div className=" md:w-1/2 w-full p-1 md:p-2">
                  <ImageHover
                    title="himachal"
                    subtitle=" FEATURED TOURS "
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur."
                    image="/images/services6.jpg.webp"
                    width={400}
                    height={400}
                  />
                </div>
                <div className="md:w-1/2 w-full p-1 md:p-2">
                  <ImageHover
                    title="himachal"
                    subtitle=" FEATURED TOURS "
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur."
                    image="/images/services1.jpg.webp"
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GallerySection;