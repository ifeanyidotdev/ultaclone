import { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import { Navbar } from "@/component/Navbar";
import HeroSection from "@/component/HeroSection";
import DiscoverSection from "@/component/DiscoverSection";
import InfoCard from "@/component/InfoCard";
import { Product } from "@/types/data.types";
import ProductSection from "@/component/ProductSection";

export default function Home() {
  const [product, setProduct] = useState<Product[]>([]);

  const base_url = "https://ultaclone-production.up.railway.app";

  const has_loaded = true;

  useEffect(() => {
    async function getProduct() {
      try {
        const response_data = await axios.get(
          `${base_url}/api/product/allProduct`
        );
        setProduct(response_data.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    getProduct();
  }, [has_loaded]);

  return (
    <>
      <Head>
        <title>Ulta Beauty</title>
        <meta name="description" content="ulta a home for make up" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <InfoCard />
      <HeroSection />
      <DiscoverSection />
      <ProductSection products={product} />
    </>
  );
}
