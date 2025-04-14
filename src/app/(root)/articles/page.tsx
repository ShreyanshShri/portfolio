import { prisma } from "@/lib/prisma";
import { Metadata } from "next";

import ArticleCard from "@/components/admin/ArticleCard";

type article = {
	title: string;
	description: string;
	coverImage: string;
	createdAt: Date;
	content: string;
	slug: string;
	id: string;
};

export const metadata: Metadata = {
	title: {
		absolute: "Shreyansh - Articles",
	},
	description:
		"I’m Shreyansh Shrivastva, a passionate MERN-stack developer and a first-year Computer Science (DS) student at JSS Academy of Technical Education, Noida. I have a strong foundation in both front-end and back-end development, and I love building scalable, efficient, and user-friendly applications that solve real-world problems.",
	twitter: {
		card: "summary_large_image",
	},
};

const Articles = async () => {
	const articles = (await prisma.article.findMany({
		orderBy: [
			{
				createdAt: "desc",
			},
		],
	})) as article[];
	return (
		<div className="articles container px-10 md:px-20 py-4 mx-auto">
			<h2 className="text-2xl font-[family-name:var(--font-faculty-glyphic)]">
				My Articles
			</h2>
			{articles.map((article, index) => {
				return (
					<ArticleCard
						key={index}
						article={article}
						showEditBtn={false}
						showDeleteBtn={false}
					/>
				);
			})}
		</div>
	);
};

export default Articles;
