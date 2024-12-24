import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";
import github_logo from "/public/icons/github.svg";
import link_arrow from "/public/icons/link-arrow.svg";

const ProjectCard = ({title, desc, languages, github, link, image} : {title: string, desc: string, languages: any, github: string, link: string, image: StaticImageData}) => {
    return(
            <div className="flex text-black bg-white mt-8 relative">

                <div className="w-2/3 px-4 py-4 relative">
                    <h2 className="font-[family-name:var(--font-faculty-glyphic)]
                                text-2xl">{title}</h2>
                    <div className="flex flex-col justify-between h-full">
                    <div className="text-justify opacity-80 mt-2">
                        {desc}
                    </div>

                    <div className="flex justify-between h-16">
                        <div className="flex">
                        {languages.map((lang: any, index: number) => {
                            return (
                                <Image
                                    src={lang}
                                    alt="tech logo"
                                    className="w-6 h-6 mr-4 bg-white opacity-100"
                                    key={index}
                                />
                            )
                        })}
                        </div>
                        <div className="flex">
                            <Link href={github}>
                                <Image
                                    src={github_logo}
                                    alt="github logo"
                                    className="w-6 h-6 mr-4 bg-white opacity-100"
                                />
                            </Link>                 
                            <Link href={link}>
                                <Image
                                    src={link_arrow}
                                    alt="link logo"
                                    className="w-6 h-6 mr-4 bg-white opacity-100"
                                />
                            </Link>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="w-1/3">
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