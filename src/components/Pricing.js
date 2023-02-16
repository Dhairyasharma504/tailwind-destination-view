import React from "react";
import SliderComponent from "./elements/Slider_Hero";
import PriceCard from "./Price_card";

const pricing = [
  { id: 1, name: "Basic Package", price: 10 },
  { id: 2, name: "Premium Package", price: 20 },
  { id: 3, name: "Silver Package", price: 30 },
  { id: 4, name: "Gold Package", price: 40 },
];
function Pricing() {
  return (
    <SliderComponent
      title="Our Pricing"
      heading="Lorem Ipsum"
      rowItem={(item) => <PriceCard key={item.id} item={item} />}
      data={pricing}
    />
  );
}

export default Pricing;
