'use client';
import Image from "next/image";
import Link from "next/link";

import logo from "/public/icons/ss-logo.svg";

const Navbar = () => {

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
            className="backdrop-blur-md p-2 px-4 sticky top-0 flex justify-between align-center"
            style={{
                height: "10vh",
                zIndex: "1000"
            }}    
        >
            <Image 
                src={logo}
                width={40}
                height={40}
                alt="logo"
                className="dark:invert"
            />
            <div className="links flex justify-between items-center min-w-60">
                <Link href={"#about"}><span>About</span></Link>
                <Link href={"#projects"}><span>Projects</span></Link>
                <Link href={"/"}><span onClick={() => { downloadPDF() }}>CV</span></Link>
                <Link href={"#contact"}><span>Contact</span></Link>
            </div>
        </nav>

    );
}

export default Navbar;