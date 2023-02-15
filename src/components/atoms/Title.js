import React from 'react';

const Title = ({ hastextwhite, title }) => {
  return (
    <div>
      <h1
        className={`text-5xl tracking-wide  capitalize my-2 font-normal ${
          hastextwhite ? ' text-lightshade' : 'text-darkshade '
        }  `}
      >
        {title}
      </h1>
    </div>
  );
};

export default Title;
