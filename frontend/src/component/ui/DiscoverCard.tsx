import React from "react";
import Image from "next/image";
import item_one from "@/assets/item_one.webp";

function DiscoverCard() {
  return (
    <div className=" w-[200px] h-[200px] lg:w-[440px] lg:h-[499px] text-start pl-4 pr-1 pt-3">
      <Image src={item_one} alt="item one" />
      <p className="font-medium">DIOR</p>
      <h2 className="text-2xl font-semibold">
        Addict Lip Maximizer Plumping Lip Gloss
      </h2>
      <button className="font-medium hover:border-b-2"> Shop now</button>
    </div>
  );
}
export default DiscoverCard;
