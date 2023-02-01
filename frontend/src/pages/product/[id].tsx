import React, { useEffect, useRef, useState } from "react";

import { Navbar } from "@/component/Navbar";
import ItemCard from "@/component/ui/ItemCard";
import { BASE_URL, Product } from "@/types/data.types";
import axios from "axios";
import { NextRouter, useRouter } from "next/router";

function Product(): JSX.Element {
  const router: NextRouter = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState<Product>();
  const [phone, setPhone] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [name, setName] = useState<string>();
  const [currentPath, setCurrentPath] = useState<string>();
  const [pageError, setPageError] = useState<boolean>(false);
  const [detailError, setDetailError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function purchaseHandler() {
    if (!phone && !name && !email) {
      setDetailError(true);
      return;
    }

    setIsLoading(true);
    try {
      const payment_info = {
        url: currentPath,
        name: name,
        email: email,
        phonenumber: phone,
      };
      const response = await axios.post(
        `${BASE_URL}/api/product/payment/${id}`,
        payment_info
      );
      const data = await response.data;
      const payment_url = data.data;
      setIsLoading(false);
      router.push(payment_url);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setCurrentPath(window.location.href);

    async function getSingleProduct() {
      try {
        const response = await axios.get(
          `${BASE_URL}/api/product/singleProduct/${id}`
        );

        setProduct(response.data.data);
      } catch (error) {
        console.log(error);
        setPageError(true);
      }
    }
    getSingleProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="flex justify-center items-center  content-center">
        <h2 className="text-2xl font-semibold">loading...</h2>
      </div>
    );
  }
  return (
    <>
      <Navbar />
      <div className=" flex w-full h-full justify-evenly content-center pt-[10em]">
        <div>
          <ItemCard
            id={product!.id}
            name={product!.name}
            image={product!.image}
            price={product!.price}
            quantity={product!.quantity}
          />
        </div>

        <div className="flex flex-col space-y-5 w-[30em] content-center pt-10">
          <input
            className="py-3 px-4 rounded-full items-center align-middle"
            type="text"
            placeholder="fullname"
            name="name"
            onChange={(e) => setName(e.currentTarget.value)}
          />
          <input
            className="py-3 px-4 rounded-full items-center align-middle"
            type="text"
            placeholder="email"
            name="email"
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <input
            className="py-3 px-4 rounded-full items-center align-middle"
            type="text"
            placeholder="phone number"
            name="phone"
            onChange={(e) => setPhone(e.currentTarget.value)}
          />
          {detailError && (
            <p className="text-red-500">please provide your details</p>
          )}
          <button
            onClick={purchaseHandler}
            className="py-3  bg-black text-white "
          >
            {isLoading ? " processing..." : "Buy"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Product;
