import { prisma } from "@/lib/prisma";

import Message from "@/components/admin/Message";
import ArticleCard from "@/components/admin/ArticleCard";
import Link from "next/link";
import NavbarWrapper from "@/components/common/NavbarWrapper";

type message = {
	name: string;
	email: string;
	message: string;
};

type article = {
	title: string;
	description: string;
	coverImage: string;
	createdAt: Date;
	content: string;
	slug: string;
	id: string;
};

const Admin = async () => {
	const messages = (await prisma.feedback.findMany()) as message[];
	const articles = (await prisma.article.findMany({
		orderBy: [
			{
				createdAt: "desc",
			},
		],
	})) as article[];
	return (
		<div id="admin">
			<NavbarWrapper />
			<div className="container px-10 md:px-20 py-12 mx-auto">
				<div className="messages mb-16">
					<h2 className="text-2xl font-[family-name:var(--font-faculty-glyphic)]">
						Your Messages
					</h2>
					{messages.map((message, index) => {
						return <Message key={index} message={message} />;
					})}
				</div>
				<div className="articles">
					<h2 className="text-2xl font-[family-name:var(--font-faculty-glyphic)]">
						Your Articles
					</h2>
					<Link href="/admin/articles/create">
						<button
							type="submit"
							className="mt-4
										ml-8
										py-2
										px-4
										rounded-md
										bg-slate-50
										text-black
										opacity-100
										"
						>
							Create New
						</button>
					</Link>
					{articles.map((article, index) => {
						return (
							<ArticleCard
								key={index}
								article={article}
								showEditBtn={true}
								showDeleteBtn={true}
							/>
						);
					})}
				</div>
				<div className="projects">
					<h2 className="text-2xl font-[family-name:var(--font-faculty-glyphic)]">
						Your Projects
					</h2>
					1. 2. 3.
				</div>
			</div>
		</div>
	);
};

export default Admin;
