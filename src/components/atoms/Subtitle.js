import React from "react";

function Subtitle({ subtitle, hasTextBlack }) {
  return (
    <div
      className={`text-base font-normal font-primary uppercase py-5 leading-loose ${
        hasTextBlack ? " text-darkShade" : "text-brand"
      } `}
    >
      {subtitle}
    </div>
  );
}

export default Subtitle;
