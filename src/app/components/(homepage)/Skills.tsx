import Subtitle from "./Subtitle";
import Image from "next/image";

import mongodb_logo from "/public/icons/mongodb.svg"
import express_logo from "/public/icons/express.svg"
import react_logo from "/public/icons/react.svg"
import node_logo from "/public/icons/node.svg"
import next_logo from "/public/icons/next.svg"
import three_logo from "/public/icons/three.svg"
import p5_logo from "/public/icons/p5.svg"
import figma_logo from "/public/icons/figma.svg"
import js_logo from "/public/icons/js.svg"
import ts_logo from "/public/icons/ts.svg"
import rust_logo from "/public/icons/rust.svg"
import cpp_logo from "/public/icons/cpp.svg"
import python_logo from "/public/icons/python.svg"

const Skills = () => {

    const webList = [
        {
            src: mongodb_logo,
            alt: "mongodv logo"
        },
        {
            src: express_logo,
            alt: "express logo"
        },
        {
            src: react_logo,
            alt: "react logo"
        },
        {
            src: node_logo,
            alt: "node logo"
        },
        {
            src: next_logo,
            alt: "next logo"
        },
    ];

    const graphicsList = [
        {
            src: three_logo,
            alt: "three logo"
        },
        {
            src: p5_logo,
            alt: "p5 logo"
        },
        {
            src: figma_logo,
            alt: "figma logo"
        },
    ];

    const languagesList = [
        {
            src: js_logo,
            alt: "js logo"
        },
        {
            src: ts_logo,
            alt: "ts logo"
        },
        {
            src: rust_logo,
            alt: "rust logo"
        },
        {
            src: python_logo,
            alt: "python logo"
        },
        {
            src: cpp_logo,
            alt: "cpp logo"
        },
    ];

    return (
        <div className="container px-10 md:px-20 py-12 mx-auto">
            <Subtitle text="MY SKILLS" />
            <div id="skills">
                <div id="web" className="flex mt-8">
                    {webList.map((el, index) => (
                        <Image
                            src={el.src}
                            alt={el.alt}
                            className="w-6 h-6 md:w-10 md:h-10 mr-4"
                            key={index}
                        />
                    ))}
                </div>
                <div id="graphics" className="flex mt-8">
                    {graphicsList.map((el, index) => (
                        <Image
                            src={el.src}
                            alt={el.alt}
                            className="w-6 h-6 md:w-10 md:h-10 mr-4"
                            key={index}
                        />
                    ))}
                </div>
                <div id="languages" className="flex mt-8">
                    {languagesList.map((el, index) => (
                        <Image
                            src={el.src}
                            alt={el.alt}
                            className="w-6 h-6 md:w-10 md:h-10 mr-4"
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills