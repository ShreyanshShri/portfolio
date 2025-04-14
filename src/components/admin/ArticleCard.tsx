import Link from "next/link";
import { deleteArticle } from "@/actions/articles";
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

const ArticleCard = ({
	article,
	showEditBtn,
	showDeleteBtn,
}: {
	article: article;
	showEditBtn: boolean;
	showDeleteBtn: boolean;
}) => {
	return (
		<div id="Message" className="my-8 border border-white-50/25 rounded-lg">
			<div
				style={{ width: "100%", height: "200px", position: "relative" }}
				className="rounded-t-lg"
			>
				<Image
					src={article.coverImage}
					alt="Cover"
					fill
					style={{ objectFit: "cover" }}
					priority
					className="rounded-t-lg"
				/>
			</div>
			<div className="px-4 py-4">
				<h3 className="text-xl mt-2">{article.title}</h3>
				<span className="opacity-75">{article.createdAt.toDateString()}</span>
				<p>{article.description}</p>
				<Link href={`/articles/${article.slug}`} className="outline-none">
					<button
						className="mt-4
                                py-2
                                px-2
                               rounded-md
                               border
                               border-white-50
                               bg-none
                               text-white
                               mr-2"
					>
						View
					</button>
				</Link>
				{showEditBtn && (
					<Link href={`/admin/articles/edit/${article.slug}`}>
						<button
							className="mt-4
							py-2
							px-2
						   rounded-md
						   bg-slate-50
						   text-black
						   opacity-90"
						>
							Edit
						</button>
					</Link>
				)}
				{showDeleteBtn && (
					<form action={deleteArticle} className="inline">
						<input type="hidden" name="id" defaultValue={article.id} />
						<input
							type="text"
							placeholder="Type Confirm to delete"
							name="confirm"
							style={{ backgroundColor: "#393939" }}
							className="
							mx-2
							p-2 
							text-white 
							rounded-md"
							required
						/>
						<button
							className="mt-4
							py-2
							px-2
						   rounded-md
						   bg-red-50
						   text-black
						   opacity-90"
							type="submit"
						>
							Delete
						</button>
					</form>
				)}
			</div>
		</div>
	);
};

export default ArticleCard;
