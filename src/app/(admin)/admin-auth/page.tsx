import { adminLogin } from "@/actions/admin";

const AdminAuth = () => {
	return (
		<div
			className="flex w-full h-screen items-center justify-center"
			suppressHydrationWarning
		>
			<form className="form flex flex-col w-80" action={adminLogin}>
				<h1 className="text-3xl font-[family-name:var(--font-faculty-glyphic)]">
					Admin Login
				</h1>
				<input
					type="password"
					name="password"
					placeholder="Password"
					style={{ backgroundColor: "#393939" }}
					className="mt-4 
                                p-2 
                                text-white 
                                rounded-md"
					required
					suppressHydrationWarning
				/>
				<button
					type="submit"
					className="mt-4
								py-2
								rounded-md
								bg-slate-50
								text-black
								opacity-80
								"
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default AdminAuth;
