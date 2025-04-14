"use server";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import slugify from "slugify";

export async function createArticle(formData: FormData) {
	const title = formData.get("title") as string;
	const description = formData.get("description") as string;
	const coverImage = formData.get("cover-image") as string;
	const content = formData.get("content") as string;
	console.log(title);
	if (
		title === "" ||
		description === "" ||
		coverImage === "" ||
		content === ""
	) {
		return;
	}
	const cookieStore = await cookies();

	let red = true;
	try {
		const sessionId = cookieStore.get(process.env.TOKEN_NAME as string)
			?.value as string;
		const admin = await prisma.admin.findUnique({ where: { id: "Admin" } });
		if (admin?.session !== sessionId) return;
		const slug = slugify(title);
		await prisma.article.create({
			data: {
				title,
				description,
				slug,
				coverImage,
				content,
			},
		});
	} catch (err) {
		console.log(err);
		red = false;
	}

	if (red) redirect("/admin");
}

export async function editArticle(formData: FormData) {
	const title = formData.get("title") as string;
	const description = formData.get("description") as string;
	const coverImage = formData.get("cover-image") as string;
	const content = formData.get("content") as string;
	const id = formData.get("id") as string;
	console.log("----------id----------", id);
	if (
		title === "" ||
		description === "" ||
		coverImage === "" ||
		content === ""
	) {
		return;
	}
	const cookieStore = await cookies();

	let red = true;
	try {
		const sessionId = cookieStore.get(process.env.TOKEN_NAME as string)
			?.value as string;
		const admin = await prisma.admin.findUnique({ where: { id: "Admin" } });
		if (admin?.session !== sessionId) return;
		const slug = slugify(title);

		await prisma.article.update({
			where: { id: id },
			data: {
				title,
				description,
				slug,
				coverImage,
				content,
			},
		});
	} catch (err) {
		console.log(err);
		red = false;
	}

	if (red) redirect("/admin");
}

export async function deleteArticle(formData: FormData) {
	const confirmation = formData.get("confirm") as string;
	const id = formData.get("id") as string;
	if (confirmation !== "Confirm") return;

	const cookieStore = await cookies();

	let red = true;
	try {
		const sessionId = cookieStore.get(process.env.TOKEN_NAME as string)
			?.value as string;
		const admin = await prisma.admin.findUnique({ where: { id: "Admin" } });
		if (admin?.session !== sessionId) return;

		await prisma.article.delete({ where: { id: id } });
	} catch (err) {
		console.log(err);
		red = false;
	}

	if (red) redirect("/admin");
}
