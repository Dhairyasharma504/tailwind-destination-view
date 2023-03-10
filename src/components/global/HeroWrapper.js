import React from "react";

function HeroWrapper({ bgImage, isSmall, children }) {
  return (
    <div className="pb-10">
      <div
        style={{
          backgroundImage: `url(${bgImage || "/images/bg_1.jpg.webp"})`,
        }}
        className={`w-full ${
          isSmall ? "md:h-[65vh] h-[65vh]" : "md:h-[80vh] h-[100vh]"
        } md:bg-center  bg-cover`}
      >
        <div className="">{children}</div>
      </div>
    </div>
  );
}

export default HeroWrapper;
