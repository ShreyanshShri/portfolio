import Subtitle from "./Subtitle";
import Image from "next/image";

import img from "/public/images/profile-pic.jpg";
import github_logo from "/public/icons/github.svg";
import twitter_logo from "/public/icons/twitter.svg"
import linkedin_logo from "/public/icons/linkedin.svg"

const About = () => {
    return(
        <div className="container px-10 md:px-20 py-12 mx-auto" id="about">
            <Subtitle text="ABOUT ME" />
            <div className="flex pt-5 flex-col md:flex-row items-center justify-center">
                <div className="flex flex-col flex-auto w-2/3 md:w-1/3 items-center justify-center mb-4">
                    <Image 
                        src={img}
                        alt="profile img"
                        className="w-4/5 rounded-full"
                    />
                    <div id="links" className="w-full max-w-56 px-8 mt-8 flex justify-around">
                        <a target="_blank" href={"https://github.com/shreyanshShri"}>
                            <Image
                                src={github_logo}
                                alt="github logo"
                                className="w-8 h-8"
                            />
                        </a>
                        <a target="_blank" href={"https://www.linkedin.com/in/shreyansh-shri/"}>
                            <Image
                                src={linkedin_logo}
                                alt="linked logo"
                                className="w-8 h-8"
                            />
                        </a>
                        <a target="_blank" href={"https://github.com/shreyanshShri"}>
                            <Image
                                src={twitter_logo}
                                alt="twitter logo"
                                className="w-8 h-8"
                            />
                        </a>
                    </div>
                </div>
                <div className="flex-auto w-full md:w-2/3 text-justify opacity-70">
                Hi there! I’m Shreyansh Shrivastva, a passionate MERN-stack developer and a dedicated 1st year college student pursuing Computer Science - DS at JSS Academy of Technical Education, Noida. 
                With a strong foundation in both front-end and back-end development, I thrive on building scalable, efficient, and user-friendly applications that solve real-world problems.
                <br /><br />
                My fascination with technology started early, and I’ve spent the past few years honing my skills in programming and software development. 
                Balancing academics with personal projects and hackathons has taught me time management, teamwork, and the importance of continuous learning.
                <br /><br />
                I’m currently exploring WEBGL and DSA to enhance my skillset while contributing to exciting projects. 
                From building beautiful UIs to developing robust server-side solutions, I’m always eager to take on new challenges and learn from them.
                </div>
            </div>
        </div>
    );
}

export default About;