import React from "react";
import ItemCard from "./ui/ItemCard";
import { Product } from "@/types/data.types";

function ProductSection(props: Product) {
  return (
    <div>
      <ItemCard
        name={props.name}
        image={props.image_url}
        price={props.price}
        quantity={props.quantity}
      />
    </div>
  );
}

export default ProductSection;
