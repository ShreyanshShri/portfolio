import Image from "next/image";
import Subtitle from "./Subtitle";

import email_logo from "/public/icons/email.svg";
import github_logo from "/public/icons/github.svg";
// import twitter_logo from "/public/icons/twitter.svg";
import linkedin_logo from "/public/icons/linkedin.svg";

import { sendFeedback } from "@/actions/sendFeedback";

const Contact = () => {
	const contactData = [
		{
			logo: email_logo,
			link: "mailto:shreyanshshrivastva@gmail.com",
			text: "shreyanshshrivastva@gmail.com",
		},
		{
			logo: github_logo,
			link: "https://github.com/shreyanshShri",
			text: "github.com/shreyanshShri",
		},
		{
			logo: linkedin_logo,
			link: "https://www.linkedin.com/in/shreyansh-shri/",
			text: "linkedin.com/in/shreyansh-shri",
		},
	];

	return (
		<div className="container px-10 md:px-20 py-12 mx-auto" id="contact">
			<Subtitle text="LET'S CONNECT" />
			<div className="wrapper flex flex-rowm mt-4 items-center flex-col md:flex-row">
				<div className="w-full md:w-1/2">
					<form
						className="form flex flex-col w-100 max-w-96"
						action={sendFeedback}
					>
						<input
							type="text"
							placeholder="Name"
							name="name"
							style={{ backgroundColor: "#393939" }}
							className="mt-4 
                               p-2 
                               text-white 
                               rounded-md"
							required
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							style={{ backgroundColor: "#393939" }}
							className="mt-4 
                                p-2 
                                text-white 
                                rounded-md"
							required
						/>
						<textarea
							name="message"
							id="message"
							style={{ backgroundColor: "#393939" }}
							className="mt-4 
                                py-2
                                px-2 
                                text-white 
                                rounded-md
                                h-32"
							placeholder="enter your message"
							required
						></textarea>
						<button
							type="submit"
							className="mt-4
                                py-2
                               rounded-md
                               bg-slate-50
                               text-black
                               opacity-80
                               "
						>
							Send
						</button>
					</form>
				</div>
				<div className="w-full md:w-1/2 px-0 md:px-6 py-6 opacity-80 truncate">
					{contactData.map((c, index) => {
						return (
							<div className="mt-4" key={index}>
								<a target="_blank" href={c.link} style={{ display: "flex" }}>
									<Image src={c.logo} alt="github logo" className="w-6 h-6" />
									<span className="ml-2">{c.text}</span>
								</a>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Contact;
