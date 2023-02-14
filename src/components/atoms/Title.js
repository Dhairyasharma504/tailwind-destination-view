import React from 'react';

const Title = (props) => {
  return (
    <div>
      <h1 className="text-5xl tracking-wide  capitalize my-2  text-darkshade  font-normal  ">
        {props.title}
      </h1>
    </div>
  );
};

export default Title;
