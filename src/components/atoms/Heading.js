import React from 'react';

export const Heading = (props) => {
  return (
    <div>
      <h1 className="text-7xl tracking-wide capitalize  text-darkshade font-bold  font-secondary ">
        {props.title}
      </h1>
    </div>
  );
};
