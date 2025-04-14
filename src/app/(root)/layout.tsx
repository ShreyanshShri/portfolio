import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/globals.css";
import Navbar from "@/components/homepage/Navbar";
import Contact from "@/components/homepage/Contact";
import Footer from "@/components/homepage/Footer";

const geistSans = localFont({
	// src: "@/app/fonts/GeistVF.woff",
	src: "../fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	// src: "@/app/fonts/GeistMonoVF.woff",
	src: "../fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});
const facultyGlyphic = localFont({
	// src: "@/app/fonts/FacultyGlyphic-Regular.ttf",
	src: "../fonts/FacultyGlyphic-Regular.ttf",
	variable: "--font-faculty-glyphic",
});

export const metadata: Metadata = {
	title: {
		default: "Shreyansh - Developer Portfolio",
		template: "%s | Shreyansh - Developer Portfolio",
	},
	description:
		"I’m Shreyansh Shrivastva, a passionate MERN-stack developer and a first-year Computer Science (DS) student at JSS Academy of Technical Education, Noida. I have a strong foundation in both front-end and back-end development, and I love building scalable, efficient, and user-friendly applications that solve real-world problems.",
	twitter: {
		card: "summary_large_image",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${facultyGlyphic.variable} antialiased`}
			>
				<Navbar />
				{children}
				<Contact />
				<Footer />
			</body>
		</html>
	);
}
