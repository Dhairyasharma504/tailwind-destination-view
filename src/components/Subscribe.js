// import React from 'react';
// import Image from 'next/image';
// import Title from './atoms/Title';
// const Subscribe = () => {
//   return (
//     <div className="container mx-auto px-4 py-10">
//       <div className="  mx-auto">
//         <div className="grid md:grid-cols-2 grid-cols-1  p-8">
//           <div className="flex  ">
//             <Image
//               src="/images/traveler.jpg.webp"
//               alt="Picture of the author"
//               width={200}
//               height={200}
//             />

//             <div className="flex flex-col justify-center items-center">
//               <Title title="subscribe"></Title>{' '}
//               <p className="text-base leading-4 mt-2 text-primary ">
//                 Subscribe to our newsletter to get news about latest trends
//               </p>{' '}
//             </div>
//           </div>
//           <div className=" ">
//             <div className="grid md:grid-cols-2 grid-cols-1 py-10 ">
//               <div className="flex items-center bg-gray-100 ">
//                 <div className="px-4 py-4">
//                   <img
//                     src="https://tuk-cdn.s3.amazonaws.com/can-uploader/newsletter-IV-svg1.svg"
//                     alt="email-icon"
//                   />
//                 </div>
//                 <input
//                   className="pl-2 w-full text-base font-medium leading-none text-gray-600 placeholder-gray-600 focus:outline-none bg-gray-100"
//                   placeholder="Enter your email address here"
//                 />
//               </div>{' '}
//               <button className="  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-black text-base font-medium leading-none text-white py-4 px-6 bg-gray-800 sm:ml-2 sm:mt-0 mt-4  ">
//                 Subscribe
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Subscribe;

import React from "react";
import Image from "next/image";
import Description from "./atoms/Description";
import Title from "./atoms/Title";

function Subscribe() {
  return (
    <div>
      <div className="py-16">
        <div className="w-full relative flex items-center justify-center">
          <Image
            src="/images/bg_1.jpg.webp"
            alt="Picture of the author"
            width={900}
            height={300}
            className="w-full h-full absolute z-10"
          />

          <div className=" bg-gray-800/70 md:my-16 lg:py-16 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40">
            <Title hastextwhite title="Don’t miss out!" />
            <Description
              hastextwhite
              text="Subscribe to your newsletter to stay in the loop. Our newsletter
              is sent once in  a week on every friday so subscribe to get
              latest news and updates."
            />
            <div className="sm:border border-white flex-col sm:flex-row flex items-center lg:w-5/12 w-full mt-12 space-y-4 sm:space-y-0">
              <input
                className="border border-white sm:border-transparent text-base w-full font-medium leading-none text-white p-4 focus:outline-none bg-transparent placeholder-white"
                placeholder="Email Address"
              />
              <button
                type="button"
                className="focus:outline-none focus:ring-offset-2 focus:ring border border-white sm:border-transparent w-full sm:w-auto bg-white py-4 px-6 hover:bg-opacity-75"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
