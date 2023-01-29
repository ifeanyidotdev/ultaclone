import Head from "next/head";
import { Navbar } from "@/component/Navbar";
import HeroSection from "@/component/HeroSection";
import DiscoverSection from "@/component/DiscoverSection";
import InfoCard from "@/component/InfoCard";

export default function Home() {
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
