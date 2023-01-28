// @flow
import * as React from "react";

type Props = {};

/** this a component for the navigation bar of the application */
export function Navbar(props: Props) {
  return (
    <div className="py-4 w-full bg-white flex justify-between sticky">
      {/*Logo navigation*/}
      <div className=" px-2 py-2 flex space-x-1 item-center">
        <h2 className="py-1 px-3 text-2xl border-r-2 border-r-black ">Menu</h2>
        <div></div>
        <div>
          <input
            className="hidden lg:flex py-[3px] bg-gray-200 px-[4em] rounded-full focus:outline-blue-500 placeholder:font-medium placeholder:text-gray-500"
            placeholder="search"
          />
        </div>
      </div>

      {/*link navigation*/}
      <div className="hidden lg:flex py-1 space-x-2 items-center text-sm">
        <a className="border-r-[1.5px] border-r-gray-500 px-[6px]">
          Find a Store
        </a>
        <a className="border-r-[1.5px] border-r-gray-500 px-[6px]">
          Email & Text Signup
        </a>
        <a className="border-r-[1.5px] border-r-gray-500 px-[6px]">
          Gift Cards
        </a>
        <a className="border-r-[1.5px] border-r-gray-500 px-[6px]">Sign In</a>
        <a className="">Rewards</a>
      </div>
    </div>
  );
}
