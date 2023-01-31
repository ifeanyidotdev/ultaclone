import { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import { Navbar } from "@/component/Navbar";
import HeroSection from "@/component/HeroSection";
import DiscoverSection from "@/component/DiscoverSection";
import InfoCard from "@/component/InfoCard";
import { Product } from "@/types/data.types";

export default function Home() {
  const [product, setProduct] = useState<Product[]>([]);

  const base_url = "https://ultaclone-production.up.railway.app";

  async function getProduct() {
    try {
      const response_data = await axios.get(
        `${base_url}/api/product/allProduct`
      );
      setProduct([...response_data.data]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <Head>
        <title>Ulta Beauty</title>
        <meta name="description" content="Vlta a home for make up" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <InfoCard />
      <HeroSection />
      <DiscoverSection />
    </>
  );
}
