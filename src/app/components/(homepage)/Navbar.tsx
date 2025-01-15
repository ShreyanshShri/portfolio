'use client';
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import logo from "/public/icons/ss-logo.svg";
import hamburger from "/public/icons/hamburger.svg";
import cross from "/public/icons/cross.svg";

import "/src/app/components/(homepage)/homepage.css";

const Navbar = () => {

    const [active, setActive] = useState(window.innerWidth >= 768 ? false : true);

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
            className="
                        py-2 px-4 sticky 
                        top-0 
                        left-0
                        flex 
                        justify-center md:justify-between
                        align-start md:align-center 
                        flex-col md:flex-row"
            style={{
                height: "10vh",
                zIndex: "1000",
                // width: "100vw"
            }}    
        >
            <div className="flex justify-between" style={{ width: window.innerWidth >= 768 ? "100%" : "100%" }}>
            <Image 
                src={logo}
                width={40}
                height={40}
                alt="logo"
                className="dark:invert"
            />
            {window.innerWidth < 768 && 
            <Image 
                src={active ? hamburger : cross}
                width={40}
                height={40}
                alt="menu item"
                onClick={() => setActive(prev => !prev)}
                className="dark:invert"
            />}
            </div>
            
            <div className={active ? "links flex justify-center items-center backdrop-blur-md min-w-60 flex-col md:flex-row w-full md:w-fit transition-all duration-500  absolute left-[-1000px] top-[9vh]"     // inactive
                                   : "links flex justify-between items-center backdrop-blur-md min-w-60 flex-col md:flex-row w-full md:w-fit transition-all duration-500 absolute md:relative left-[0px] top-[9vh] md:top-[0vh]"} // active
            >
                <Link href={"#about"} className="mt-2 md:mt-0"><span>About</span></Link>
                <Link href={"#projects"} className="mt-2 md:mt-0"><span>Projects</span></Link>
                <Link href={"/"} className="mt-2 md:mt-0"><span onClick={() => { downloadPDF() }}>CV</span></Link>
                <Link href={"#contact"} className="mt-2 md:mt-0"><span>Contact</span></Link>
            </div>
        </nav>

    );
}

export default Navbar;