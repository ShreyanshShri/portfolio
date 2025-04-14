import { prisma } from "@/lib/prisma";
import { editArticle } from "@/actions/articles";

type article = {
	title: string;
	description: string;
	coverImage: string;
	createdAt: Date;
	content: string;
	slug: string;
	id: string;
};

const page = async ({ params }: { params: { slug: string } }) => {
	const article = (await prisma.article.findUnique({
		where: {
			slug: params.slug,
		},
	})) as article;

	return (
		<form
			className="form container px-10 md:px-20 py-12 mx-auto flex flex-col w-full"
			action={editArticle}
		>
			<h1 className="text-3xl mb-8">Edit Article</h1>
			<input type="hidden" name="id" defaultValue={article.id} />
			<label htmlFor="title">Title</label>
			<input
				type="text"
				placeholder="Title"
				name="title"
				defaultValue={article.title}
				style={{ backgroundColor: "#393939" }}
				className="mt-1
                            mb-4 
                            p-2 
                            text-white 
                            rounded-md"
				required
			/>
			<label htmlFor="description">Description</label>
			<input
				type="text"
				placeholder="Description"
				name="description"
				style={{ backgroundColor: "#393939" }}
				defaultValue={article.description}
				className="mt-1
                            mb-4 
                            p-2 
                            text-white 
                            rounded-md"
				required
			/>
			<label htmlFor="cover-image">Cover Image</label>
			<input
				type="text"
				placeholder="Cover Image"
				name="cover-image"
				style={{ backgroundColor: "#393939" }}
				defaultValue={article.coverImage}
				className="mt-1
                            mb-4 
                            p-2 
                            text-white 
                            rounded-md"
				required
			/>
			<label htmlFor="content">Content</label>
			<textarea
				name="content"
				id="content"
				placeholder="Your Content Here"
				style={{ backgroundColor: "#393939" }}
				defaultValue={article.content}
				className="mt-1
                            mb-4 
                            py-2
                            px-2 
                            text-white 
                            rounded-md
                            h-32"
				required
			></textarea>
			<button
				type="submit"
				className="mt-4
                        py-2
                        rounded-md
                        bg-slate-50
                        text-black
                        opacity-100
                        max-w-16
                        "
			>
				Save
			</button>
		</form>
	);
};

export default page;
