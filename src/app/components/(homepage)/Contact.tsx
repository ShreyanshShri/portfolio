import Link from "next/link";
import Image from "next/image";
import Subtitle from "./Subtitle";

import email_logo from "/public/icons/email.svg";
import github_logo from "/public/icons/github.svg";
import twitter_logo from "/public/icons/twitter.svg";
import linkedin_logo from "/public/icons/linkedin.svg";

const Contact = () => {

    const contactData = [
        {
            logo: email_logo,
            link: "mailto:shreyanshshrivastva@gmail.com",
            text: "shreyanshshrivastva@gmail.com"
        },
        {
            logo: github_logo,
            link: "https://github.com/shreyanshShri",
            text: "github.com/shreyanshShri"
        },
        {
            logo: linkedin_logo,
            link: "https://www.linkedin.com/in/shreyansh-shri/",
            text: "linkedin.com/in/shreyansh-shri"
        },
    ]

    return (
        <div className="container px-20 py-12 mx-auto">
            <Subtitle text="LET'S CONNECT" />
            <div className="wrapper flex flex-rowm mt-4">
                <div className="w-1/2">
                <div className="form flex flex-col w-100 max-w-96">
                    <input type="text" placeholder="Name" style={{backgroundColor: "#393939"}} 
                    className="mt-4 
                               p-2 
                               text-white 
                               rounded-md "/>
                    <input type="email" placeholder="Email" style={{backgroundColor: "#393939"}} 
                    className="mt-4 
                                p-2 
                                text-white 
                                rounded-md "/>
                    <textarea name="" id="" style={{backgroundColor: "#393939"}} 
                    className="mt-4 
                                py-4 
                                text-white 
                                rounded-md "></textarea>
                    <button 
                    className="mt-4
                                py-2
                               rounded-md
                               bg-slate-50
                               text-black
                               opacity-80
                               ">Send</button>
                </div>
                </div>
                <div className="w-1/2 px-6 py-6 opacity-80">
                    {contactData.map((c, index) => {
                        return (
                            <div className="mt-4" key={index}>
                            <Link href={c.link} style={{display: 'flex'}}>
                                <Image
                                    src={c.logo}
                                    alt="github logo"
                                    className="w-6 h-6"
                            /><span className="ml-2">{c.text}</span></Link>
                        </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Contact;