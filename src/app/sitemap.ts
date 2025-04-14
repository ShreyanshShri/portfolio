import { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const articles = await prisma.article.findMany();

	const articleEntries: MetadataRoute.Sitemap = articles.map(
		(article: any) => ({
			url: `${process.env.BASE_URL}/articles/${article.slug}`,
			lastModified: article.updatedAt,
		})
	);

	return [
		{
			url: `${process.env.BASE_URL}`,
			lastModified: new Date(),
		},
		{
			url: `${process.env.BASE_URL}/articles`,
			lastModified: new Date(),
		},
		{
			url: `${process.env.BASE_URL}/projects`,
			lastModified: new Date(),
		},
		...articleEntries,
	];
}
