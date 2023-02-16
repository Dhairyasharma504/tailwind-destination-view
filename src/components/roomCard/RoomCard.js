import React from "react";
import Card from "./Card";
import Title from "../atoms/Title";

import Subtitle from "../atoms/Subtitle";
import { rooms } from "../../utils/data";

function RoomCard() {
  return (
    <div className="container mx-auto p-4">
      <div className="mx-auto text-center">
        <Title title="our rooms" />
        <Subtitle subtitle="rooms" />
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
        {rooms.map((data) => (
          <Card
            key={data.id}
            item={data}
            image={data.image}
            alt={data.title}
            width={data.width}
            height={data.height}
            label={data.label}
            typeRoom={data.typeRoom}
          />
        ))}
      </div>
    </div>
  );
}

export default RoomCard;
