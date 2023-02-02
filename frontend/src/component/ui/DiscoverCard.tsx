import React from "react";
import Image from "next/image";
import item_one from "@/assets/item_one.webp";

function DiscoverCard() {
  return (
    <div className="flex flex-col items-start w-[400px] h-[490px] px-2">
      <Image src={item_one} alt="item one" width={400} height={400} />
      <p className="font-[0.3px] lg:font-medium py-1">DIOR</p>
      <h2 className="text-sm md:text-md lg:text-[18px] font-semibold py-1 text-start">
        Addict Lip Maximizer Plumping Lip Gloss
      </h2>
      <button className="font-medium hover:border-b-2 hover:border-b-black">
        {" "}
        Shop now
      </button>
    </div>
  );
}
export default DiscoverCard;
