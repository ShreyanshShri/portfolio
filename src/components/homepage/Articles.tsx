import Image from "next/image";
import Link from "next/link";

import Subtitle from "./Subtitle";
import arrow_graphic from "/public/icons/arrow-graphic.svg";
import { prisma } from "@/lib/prisma";
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

const Articles = async () => {
	const articles = (await prisma.article.findMany({
		orderBy: [
			{
				createdAt: "desc",
			},
		],
		take: 3,
	})) as article[];

	return (
		<div className="container px-10 md:px-20 py-12 mx-auto" id="projects">
			<Subtitle text="MY ARTICLES" />

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

			<div className="mt-2 flex justify-end">
				<Image src={arrow_graphic} alt="arrow graphic" className="w-12 h-12" />
				<Link href={"/articles"} className="ml-2 underline mt-4 h-fit">
					See More
				</Link>
			</div>
		</div>
	);
};

export default Articles;
