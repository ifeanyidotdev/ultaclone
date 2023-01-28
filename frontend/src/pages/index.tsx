import Head from "next/head";
import {Navbar} from "@/component/Navbar";
import HeroSection from "@/component/HeroSection";
import DiscoverSection from "@/component/DiscoverSection";

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Vlta a home for make up" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="">
				<Navbar />
				<HeroSection />
				<DiscoverSection />
			</main>
		</>
	);
}
