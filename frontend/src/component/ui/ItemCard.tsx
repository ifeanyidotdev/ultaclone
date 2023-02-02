import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

function ItemCard(props: Props) {
  const router = useRouter();
  return (
    <Link href={`product/${props.id}`}>
      <div className="h-[445px] w-[375px] bg-white rounded-md">
        <Image
          className="cover px-2 pt-3"
          src={props.image}
          alt={props.name}
          width={400}
          height={400}
        />

        <div className="px-4">
          <h2 className="font-bold py-1">{props.name}</h2>
          <p className="font-semibold">#{props.price}</p>
        </div>
      </div>
    </Link>
  );
}

export default ItemCard;
