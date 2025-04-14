import ProjectCard from "@/components/common/ProjectCard";
import { Metadata } from "next";

import myattendance_img from "/public/images/myattendance.png";
import mongodb_logo from "/public/icons/mongodb.svg";
import express_logo from "/public/icons/express.svg";
import react_logo from "/public/icons/react.svg";
import node_logo from "/public/icons/node.svg";
import figma_logo from "/public/icons/figma.svg";

export const metadata: Metadata = {
	title: {
		absolute: "Shreyansh - Projects",
	},
	description:
		"I’m Shreyansh Shrivastva, a passionate MERN-stack developer and a first-year Computer Science (DS) student at JSS Academy of Technical Education, Noida. I have a strong foundation in both front-end and back-end development, and I love building scalable, efficient, and user-friendly applications that solve real-world problems.",
	twitter: {
		card: "summary_large_image",
	},
};

const Projects = () => {
	return (
		<div className="container px-10 md:px-20 py-12 mx-auto">
			<h1 className="text-3xl">My Work</h1>
			<ProjectCard
				title="MyAttendance"
				desc="The app leverages QR code technology to enable a seamless check-in process. 
                      Every 10 sec a unique QR code is generated, which they scan using their smartphone to mark their attendance.
                      Since the QRs are being reset, it makes it much more reliable than the alternatves. It uses websockets to update the QRs."
				languages={[
					mongodb_logo,
					express_logo,
					react_logo,
					node_logo,
					figma_logo,
				]}
				github="https://github.com/shreyanshShri/qr-attendance"
				link="https://qr-frontend-five.vercel.app"
				image={myattendance_img}
			/>
		</div>
	);
};

export default Projects;
