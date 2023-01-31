import React from "react";
import Image from "next/image";

interface Props {
  name: string;
  image: string;
  price: number;
  quantity: number;
}

function ItemCard(props: Props) {
  return (
    <div className="h-10">
      <div>
        <Image src={props.image} alt={props.name} />
      </div>
      <div>
        <h2>{props.name}</h2>
        <p>#{props.price}</p>
      </div>
    </div>
  );
}

export default ItemCard;
