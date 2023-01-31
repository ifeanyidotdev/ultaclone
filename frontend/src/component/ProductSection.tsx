import React from "react";
import ItemCard from "./ui/ItemCard";
import { Product } from "@/types/data.types";

type Props = {
  products: Product[];
};

function ProductSection(props: Props) {
  const products = props.products;
  return (
    <div className="flex">
      {products.map((product) => (
        <ItemCard
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
          quantity={product.quantity}
        />
      ))}
    </div>
  );
}

export default ProductSection;
