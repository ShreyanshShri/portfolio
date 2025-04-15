"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "/public/icons/ss-logo.svg";
import hamburger from "/public/icons/hamburger.svg";
import cross from "/public/icons/cross.svg";

import "@/components/homepage/homepage.css";

const Navbar = () => {
	const [active, setActive] = useState(false);
	useEffect(() => {
		if (window.innerWidth > 768) setActive(true);
	});

	const downloadPDF = () => {
		const link = document.createElement("a");
		link.href = "./shreyansh-cv.pdf";
		link.download = "Shreyansh-CV";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<nav
			className={
				active
					? "py-2 px-4 sticky top-0 left-0 flex h-screen md:h-[60px] justify-start md:justify-between align-start md:align-center flex-col md:flex-row"
					: "py-2 px-4 sticky top-0 left-0 flex h-[60px] justify-start md:justify-between align-start md:align-center flex-col md:flex-row"
			}
			style={{
				zIndex: "1000",
			}}
		>
			<div className="flex justify-between align-center">
				<Link href="/">
					<Image
						src={logo}
						width={40}
						height={40}
						alt="logo"
						className="dark:invert"
					/>
				</Link>
				<Image
					src={active ? cross : hamburger}
					width={40}
					height={40}
					alt="menu item"
					className="dark:invert inline md:hidden cursor-pointer"
					onClick={() => {
						setActive(!active);
					}}
				/>
			</div>

			<div
				className={
					active
						? "flex justify-between items-center flex-col md:flex-row w-full md:w-fit transition-all duration-500 mt-16 md:mt-0"
						: "hidden"
				}
			>
				<Link href={"/#about"} className="mt-2 px-3 md:mt-0">
					<span>About</span>
				</Link>
				<Link href={"/articles"} className="mt-2 px-3 md:mt-0">
					<span>Articles</span>
				</Link>
				<Link href={"/projects"} className="mt-2 px-3 md:mt-0">
					<span>Projects</span>
				</Link>
				<Link href={"/"} className="mt-2 px-3 md:mt-0">
					<span
						onClick={() => {
							downloadPDF();
						}}
					>
						CV
					</span>
				</Link>
				<Link href={"/#contact"} className="mt-2 px-3 md:mt-0">
					<span>Contact</span>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
