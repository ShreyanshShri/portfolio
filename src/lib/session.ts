"use server";

import { cookies } from "next/headers";
import crypto from "crypto";
import { prisma } from "./prisma";

const SESSION_EXPIRATION = 60 * 60 * 24 * 30;
const TOKEN_NAME = process.env.TOKEN_NAME as string;

export async function createUserSession() {
	const sessionId = crypto.randomBytes(32).toString("hex").normalize();

	await prisma.admin.update({
		where: {
			id: "Admin",
		},
		data: {
			session: sessionId,
		},
	});
	await setCookie(sessionId);
	console.log(sessionId);
}

export async function destroyUserSession() {
	const cookieStore = await cookies();
	const sessionId = cookieStore.get(TOKEN_NAME)?.value as string;
	if (!sessionId) return;
	await prisma.admin.update({
		where: {
			id: "Admin",
		},
		data: {
			session: "",
		},
	});
	cookieStore.delete(TOKEN_NAME);
}

async function setCookie(sessionId: string) {
	const cookieStore = await cookies();
	cookieStore.set(TOKEN_NAME, sessionId, {
		secure: true,
		httpOnly: true,
		sameSite: "lax",
		expires: new Date(Date.now() + SESSION_EXPIRATION * 1000),
	});
}
