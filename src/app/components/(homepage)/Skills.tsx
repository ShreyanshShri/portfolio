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
    return (
        <div className="container px-20 py-12 mx-auto">
            <Subtitle text="MY SKILLS" />
            <div id="skills">
                <div id="web" className="flex mt-8">
                    <Image
                        src={mongodb_logo}
                        alt="mongodb logo"
                        className="w-10 h-10 mr-4"
                    />
                    <Image
                        src={express_logo}
                        alt="express logo"
                        className="w-10 h-10 mr-4"
                    />
                    <Image
                        src={react_logo}
                        alt="react logo"
                        className="w-10 h-10 mr-4"
                    />
                    <Image
                        src={node_logo}
                        alt="node logo"
                        className="w-10 h-10 mr-4"
                    />
                    <Image
                        src={next_logo}
                        alt="next logo"
                        className="w-10 h-10 mr-4"
                    />
                </div>
                <div id="graphics" className="flex mt-8">
                    <Image
                        src={three_logo}
                        alt="three logo"
                        className="w-10 h-10 mr-4"
                    />
                    <Image
                        src={p5_logo}
                        alt="p5 logo"
                        className="w-10 h-10 mr-4"
                    />
                    <Image
                        src={figma_logo}
                        alt="figma logo"
                        className="w-10 h-10 mr-4"
                    />
                </div>
                <div id="languages" className="flex mt-8">
                    <Image
                        src={js_logo}
                        alt="javascript logo"
                        className="w-10 h-10 mr-4"
                    />
                    <Image
                        src={ts_logo}
                        alt="typescript logo"
                        className="w-10 h-10 mr-4"
                    />
                    <Image
                        src={python_logo}
                        alt="python logo"
                        className="w-10 h-10 mr-4"
                    />
                    <Image
                        src={rust_logo}
                        alt="rust logo"
                        className="w-10 h-10 mr-4"
                    />
                    <Image
                        src={cpp_logo}
                        alt="cpp logo"
                        className="w-10 h-10 mr-4"
                    />
                </div>
            </div>
        </div>
    )
}

export default Skills