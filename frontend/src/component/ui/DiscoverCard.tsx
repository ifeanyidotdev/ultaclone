import React from "react";
import Image from "next/image";
import item_one from "@/assets/item_one.webp";

function DiscoverCard() {
  return (
    <div className="overflow-x-auto snap-x-mandatory scroll-p-3 gap-1 scrollbar">
      <div className="flex md:flex-wrap lg:flex-nowrap justify-between md:justify-center py-10 w-[1200px] md:w-full ">
        <div className="flex flex-col items-start w-[300px] lg:w-[400px]  pb-5 px-2">
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

        <div className="flex flex-col items-start w-[300px] lg:w-[400px]  pb-5 px-2">
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

        <div className="flex flex-col items-start w-[300px] lg:w-[400px]  pb-5 px-2">
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

        <div className="flex flex-col items-start w-[300px] lg:w-[400px]  pb-5 px-2">
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
      </div>
    </div>
  );
}
export default DiscoverCard;
