import React from 'react';

const Texthero = (props) => {
  return (
    <div>
      <div className="mx-auto my-20  ">
        <h5 className="text-lg   font-semibold font-primary uppercase  my-5 leading-loose text-brand">
          {props.heading}
        </h5>
        <h1 className="text-7xl tracking-wide capitalize  text-darkshade font-bold  font-secondary ">
          {props.title}
        </h1>
      </div>
    </div>
  );
};

export default Texthero;
