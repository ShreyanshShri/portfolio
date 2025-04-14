"use server";
import { prisma } from "@/lib/prisma";
import { comparePasswords } from "@/lib/passwordHasher";
import { createUserSession } from "@/lib/session";
import { redirect } from "next/navigation";

export async function adminLogin(formData: FormData) {
	const password = formData.get("password") as string;
	console.log(password);
	const user = await prisma.admin.findUnique({ where: { id: "Admin" } });
	console.log(user);

	const passwordMatches = await comparePasswords({
		password,
		salt: process.env.SALT as string,
		hashedPassword: user!.password,
	});
	if (!passwordMatches) return;

	await createUserSession();
	redirect("/admin");
}
