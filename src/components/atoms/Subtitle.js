import React from "react";

function Subtitle({ subtitle, hasTextblack }) {
  return (
    <div
      className={`text-base font-normal font-primary uppercase py-5 leading-loose ${
        hasTextblack ? " text-darkShade" : "text-brand"
      } `}
    >
      {subtitle}
    </div>
  );
}

export default Subtitle;
