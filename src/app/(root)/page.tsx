import Image from "next/image";

import bgImg from "/public/images/hero-image.jpg";

import Hero from "@/components/homepage/Hero";
import About from "@/components/homepage/About";
import Skills from "@/components/homepage/Skills";
import Work from "@/components/homepage/Projects";
import Articles from "@/components/homepage/Articles";

export default function Home() {
	return (
		<div className="font-[family-name:var(--font-geist-sans)]">
			<Image
				src={bgImg}
				alt="background abstract img"
				fill
				sizes="100vw"
				className="object-cover"
				style={{
					zIndex: "-100",
				}}
			/>
			{/* <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" /> */}
			{/* <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/15" /> */}
			<div className="absolute inset-0 bg-[linear-gradient(45deg,_rgba(0,0,0,1)_0%,_rgba(0,0,0,0.15)_100%)]" />
			<Hero />
			<About />
			<Skills />
			<Articles />
			<Work />
		</div>
	);
}
