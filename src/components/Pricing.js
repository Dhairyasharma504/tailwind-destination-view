import React from 'react';
import SliderComponent from '../components/elements/Slider_Hero';
import Price_card from './Price_card';
const pricing = [
  { id: 1, name: 'Basic Package', price: 10 },
  { id: 2, name: 'Premium Package', price: 20 },
  { id: 3, name: 'Silver Package', price: 30 },
  { id: 4, name: 'Gold Package', price: 40 },
];
const Pricing = () => {
  return (
    <SliderComponent
      title="Our Pricing"
      heading="Lorem Ipsum"
      rowItem={(item) => <Price_card item={item} />}
      data={pricing}
    ></SliderComponent>
  );
};

export default Pricing;
