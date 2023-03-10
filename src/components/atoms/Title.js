import React from "react";

function Title({ hastextwhite, title }) {
  return (
    <div>
      <h1
        className={`text-5xl tracking-wide  capitalize my-2 font-normal ${
          hastextwhite ? " text-lightShade" : "text-darkShade "
        }  `}
      >
        {title}
      </h1>
    </div>
  );
}

export default Title;
