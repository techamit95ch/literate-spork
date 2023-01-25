/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		appDir: true,
	},
	images: {
		domains: ['mdbootstrap.com'],
	},
};

module.exports = nextConfig;
