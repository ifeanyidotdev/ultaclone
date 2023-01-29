import React from "react";
import Image from "next/image";
import DiscoverCard from "@/component/ui/DiscoverCard";
import foundation_one from "@/assets/foundation_one.webp";

type Discover = {
  dicover: JSX.Element;
};

// handles the Discover section of the application
function DiscoverSection() {
  const [discover, setDiscover] = React.useState<Discover[]>([]);

  return (
    <div className="text-center bg-white">
      <div className="">
        <h2 className=" text-2xl lg:text-5xl font-semibold pt-10 pb-3">
          Discover DIOR at Ulta Beauty
        </h2>
        <p className="font-medium text-clip lg:text-2xl font-serif py-1 pb-5">
          Step into a world celebrating confidence, individual beauty, and
          savoir-faire excellence.
        </p>
      </div>

      <div className="h-[37em] flex overflow-x-auto">
        <DiscoverCard />
        <DiscoverCard />
        <DiscoverCard />
        <DiscoverCard />
      </div>

      {/*the today's deals section*/}
      <div className="pt-7 text-start">
        <p className="font-medium text-[17px] lg:text-[27px] pl-[40px] lg:pl-[170px] pb-2">
          {" "}
          Todays deals
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center px-5 h-[50em]">
        <div className="bg-gray-50 h-[39em] w-[20em] lg:h-[36em] lg:w-[70em] flex flex-col lg:flex-row justify-center items-center space-y-3 pt-[1em] lg:pl-20 lg:ml-[10em]">
          <Image
            src={foundation_one}
            alt="foundation"
            className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] lg:pl-[20px]"
          />
          <div className=" flex flex-col items-start lg:pl-[6em] space-y-5">
            <div className="">
              <p className=" font-medium text-sm rounded bg-purple-400">
                Ends Jan 28
              </p>
            </div>
            <p> APP EXCLUSIVE</p>
            <h3 className="lg:text-2xl font-semibold">
              up to 50% off Complexsion
            </h3>
            <p className="text-[13px] lg:text-md font-thin">
              Choose from Lencome, Estee Lauder & more
            </p>

            <button className=" text-start py-2  items-center border-b-[2px] border-b-black">
              Download our app
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscoverSection;
