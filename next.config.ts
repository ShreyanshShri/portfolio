import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	eslint: {
		ignoreDuringBuilds: true,
	},
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**", // wildcard allows all domains
			},
		],
	},
};

export default nextConfig;
