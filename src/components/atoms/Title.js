import React from 'react';

const Title = (props) => {
  return (
    <div>
      <h1 className="text-3xl tracking-wide capitalize  text-darkshade font-bold  font-secondary ">
        {props.title}
      </h1>
    </div>
  );
};

export default Title;
