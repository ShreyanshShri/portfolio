import { prisma } from "@/lib/prisma";
import Image from "next/image";

type article = {
	title: string;
	description: string;
	coverImage: string;
	createdAt: Date;
	content: string;
	slug: string;
	id: string;
};

export async function generateStaticParams() {
	const articles = (await prisma.article.findMany({
		orderBy: [
			{
				createdAt: "desc",
			},
		],
	})) as article[];

	return articles.map((article) => ({
		slug: article.slug,
	}));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const article = (await prisma.article.findUnique({
		where: {
			slug: slug,
		},
	})) as article;

	return {
		title: article?.title,
		description: article?.description,
		openGraph: {
			images: [
				{
					url: article?.coverImage,
				},
			],
		},
	};
}

const ArticlePage = async ({
	params,
}: {
	params: Promise<{ slug: string }>;
}) => {
	const { slug } = await params;
	const article = (await prisma.article.findUnique({
		where: {
			slug: slug,
		},
	})) as article;

	return (
		<>
			<div style={{ width: "100%", height: "200px", position: "relative" }}>
				<Image
					src={article.coverImage}
					alt="Cover"
					fill
					style={{ objectFit: "cover" }}
					priority
				/>
			</div>
			<div id="ArticlePage" className="container px-10 md:px-20 py-12 mx-auto">
				<h1 className="text-3xl font-[family-name:var(--font-faculty-glyphic)] mt-8 mb-2">
					{article?.title}
				</h1>
				<span className="opacity-75">{article?.createdAt.toDateString()}</span>
				<p className="text-bold mt-4 mb-4">{article?.description}</p>
				<hr />
				<p className="my-4">{article?.content}</p>
			</div>
		</>
	);
};

export default ArticlePage;
