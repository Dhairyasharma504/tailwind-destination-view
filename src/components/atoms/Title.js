import React from 'react';

const Title = (props) => {
  return (
    <div>
      <h1 className="text-3xl tracking-wide  capitalize my-2  text-darkshade font-bold  ">
        {props.title}
      </h1>
    </div>
  );
};

export default Title;
