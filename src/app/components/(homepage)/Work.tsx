import Image from "next/image";
import Link from "next/link";

import Subtitle from "./Subtitle";
import ProjectCard from "./ProjectCard";

import shader_img from "/public/images/shader-pattern.png"
import myattendance_img from "/public/images/myattendance.png"
import healthplusplus_img from "/public/images/health++.png"

import mongodb_logo from "/public/icons/mongodb.svg"
import express_logo from "/public/icons/express.svg"
import react_logo from "/public/icons/react.svg"
import node_logo from "/public/icons/node.svg"
import three_logo from "/public/icons/three.svg"
import p5_logo from "/public/icons/p5.svg"
import figma_logo from "/public/icons/figma.svg"
import arrow_graphic from "/public/icons/arrow-graphic.svg"

const Work = () => {
    return (
        <div className="container px-10 md:px-20 py-12 mx-auto" id="projects">
            <Subtitle text="MY WORK" />
            <ProjectCard  
                title="MyAttendance"
                desc="The app leverages QR code technology to enable a seamless check-in process. 
                      Every 10 sec a unique QR code is generated, which they scan using their smartphone to mark their attendance.
                      Since the QRs are being reset, it makes it much more reliable than the alternatves. It uses websockets to update the QRs."
                languages={[mongodb_logo, express_logo, react_logo, node_logo, figma_logo]}
                github="https://github.com/shreyanshShri/qr-attendance"
                link="https://qr-frontend-five.vercel.app"
                image={myattendance_img}
            />
            <ProjectCard  
                title="Health++"
                desc="Health++ is a platform that bridges the gap between patients and healthcare professionals, providing quick and convenient access to medical expertise. 
                      This app allows users to connect with certified doctors for consultations, prescriptions, and health advice, all from the comfort of their homes.
                      It also has additional features like QnA forum and daily blogs."
                languages={[mongodb_logo, express_logo, react_logo, node_logo, figma_logo]}
                github="https://github.com/shreyanshShri/health-app"
                link="https://shreyanshshri.netlify.app"
                image={healthplusplus_img}
            />
            <ProjectCard  
                title="Shader Pattern"
                desc="This is a fun animated pattern I created in shadertoy with WEB_GL.
                This was created with the help of a tutorial by kishimishu and I am still exploring WEB_GL."
                languages={[p5_logo, three_logo]}
                github="https://github.com/shreyanshShri"
                link="https://www.typescriptlang.org/docs/handbook/basic-types.html"
                image={shader_img}
            />
            <div className="mt-2 flex justify-end">
                <Image
                    src={arrow_graphic}
                    alt="arrow graphic"
                    className="w-12 h-12"
                />
                <Link href={"/"} className="ml-2 underline mt-4 h-fit">See More</Link>
            </div>
        </div>
    )
}

export default Work;