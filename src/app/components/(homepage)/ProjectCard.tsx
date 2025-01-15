import Image from "next/image";
import { StaticImageData } from "next/image";

import github_logo from "/public/icons/github.svg";
import link_arrow from "/public/icons/link-arrow.svg";

const ProjectCard = ({title, desc, languages, github, link, image} : {title: string, desc: string, languages: any, github: string, link: string, image: StaticImageData}) => {
    return(
            <div className="flex text-black bg-white mt-8 relative flex-col-reverse md:flex-row">

                <div className="w-full md:w-2/3 px-4 py-4 relative">
                    <h2 className="font-[family-name:var(--font-faculty-glyphic)]
                                text-2xl">{title}</h2>
                    <div className="flex flex-col justify-between h-full">
                    <div className="text-justify opacity-80 mt-2">
                        {desc}
                    </div>

                    <div className="flex justify-between h-16 md:mt-0 mt-4 flex-col md:flex-row">
                        <div className="flex">
                        {languages.map((lang: any, index: number) => {
                            return (
                                <Image
                                    src={lang}
                                    alt="tech logo"
                                    className="w-6 h-6 mr-2 md:mr-4 bg-white opacity-100"
                                    key={index}
                                />
                            )
                        })}
                        </div>
                        <div className="flex">
                            <a target="_blank" href={github}>
                                <Image
                                    src={github_logo}
                                    alt="github logo"
                                    className="w-6 h-6 mr-4 bg-white opacity-100"
                                />
                            </a>                 
                            <a target="_blank" href={link}>
                                <Image
                                    src={link_arrow}
                                    alt="link logo"
                                    className="w-6 h-6 mr-4 bg-white opacity-100"
                                />
                            </a>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="w-full md:w-1/3">
                    <Image
                        src={image}
                        alt="project image"
                        className="w-full h-full"
                        style={{top: "0"}}
                    />
                </div>
            </div>
    )
}

export default ProjectCard;