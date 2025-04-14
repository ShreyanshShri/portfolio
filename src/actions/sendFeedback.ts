"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function sendFeedback(formData: FormData) {
	const name = formData.get("name") as string;
	const email = formData.get("email") as string;
	const message = formData.get("message") as string;
	console.log("hehe");
	if (name == "" || email == "" || message == "") {
		return;
	}
	let err = false;
	try {
		await prisma.feedback.create({
			data: {
				name,
				email,
				message,
			},
		});
	} catch (error) {
		err = true;
		console.log(error);
	}

	if (err) {
		alert("An error occured");
		return;
	}

	redirect("/");
}
