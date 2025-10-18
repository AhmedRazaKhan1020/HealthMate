/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "randomuser.me",
       "encrypted-tbn0.gstatic.com", 
    ],
  },
};

export default nextConfig;

