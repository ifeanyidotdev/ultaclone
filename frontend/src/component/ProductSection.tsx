import React from "react";
import ItemCard from "./ui/ItemCard";
import { Product } from "@/types/data.types";

type Props = {
  products: Product[];
};

function ProductSection(props: Props) {
  const products = props.products;
  return (
    <div className="flex overflow-x-scroll snap-x-mandatory scroll-p-3 p-1 gap-1 lg:overflow-x-scroll lg:snap-proximity bg-white shadow-xl rounded-lg">
      {products.map((product) => (
        <div key={product.id} className="flex-start p-2 gap-1 snap-start ">
          <ItemCard
            id={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            quantity={product.quantity}
          />
        </div>
      ))}
    </div>
  );
}

export default ProductSection;
