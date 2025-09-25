/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "source.unsplash.com", // Unsplash random images
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com", // Normal Unsplash images
            },
            {
                protocol: "https",
                hostname: "upload.wikimedia.org", // Wikipedia images
            },
            {
                protocol: "https",
                hostname: "img.freepik.com", // Freepik images
            },
        ],
    },
    experimental: {
        scrollRestoration: true,
    },
};

export default nextConfig;
