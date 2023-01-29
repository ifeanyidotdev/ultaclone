// @flow
import * as React from "react";
import { CiLocationOn } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import { SlMagnifier } from "react-icons/sl";
import { HiOutlineMenu } from "react-icons/hi";

type Props = {};

/** this a component for the navigation bar of the application */
export function Navbar(props: Props) {
  return (
    <div className="py-4  bg-white flex justify-between sticky items-center">
      {/*Logo navigation*/}
      <div className=" px-2 py-2 flex space-x-1 item-center">
        <div className="pr-3 lg:border-r-2 lg:border-r-black ">
          <HiOutlineMenu className="h-8 w-8" />
          <p className="lg:hidden font-semibold text-[0.7em] ">Menu</p>
        </div>
        {/* <h2 className="py-1 px-3 text-2xl border-r-2 border-r-black ">Menu</h2> */}
        <div className="lg:hidden">
          <SlMagnifier className="h-8 w-8" />
          <p className="font-semibold text-[0.7em]">Search</p>
        </div>
        <div>
          <input
            className="hidden lg:flex pl-2 ml-2 py-[3px] bg-gray-200 px-[4em] rounded-full focus:outline-blue-500 placeholder:font-medium placeholder:text-gray-500"
            placeholder="search"
          />
        </div>
      </div>

      {/*link navigation*/}
      <div className="flex text-center lg:hidden px-2">
        <div className="pr-3">
          <CiLocationOn className="h-8 w-8" />
          <p className="font-semibold text-[0.7em]">Store</p>
        </div>

        <div>
          <BsHandbag className="h-8 w-8" />
          <p className="font-semibold text-[0.7em]">Bag</p>
        </div>
      </div>

      {/* larga screen menu */}
      <div className="hidden lg:flex py-1 space-x-4 justify-center items-center text-sm px-5">
        <a className="text-[0.8em] border-r-[1.5px] border-r-gray-500 px-[6px]">
          Find a Store
        </a>
        <a className="text-[0.8em] border-r-[1.5px] border-r-gray-500 px-[6px]">
          Email & Text Signup
        </a>
        <a className="text-[0.8em] border-r-[1.5px] border-r-gray-500 px-[6px]">
          Gift Cards
        </a>
        <a className=" text-[0.8em] border-r-[1.5px] border-r-gray-500 px-[6px]">
          Sign In
        </a>
        <a className="text-[0.8em]">Rewards</a>
        <BsHandbag className="h-6 w-6 ml-4" />
      </div>
    </div>
  );
}
