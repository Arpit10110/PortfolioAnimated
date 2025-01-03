/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint:{
      ignoreDuringBuilds:true,
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            pathname: '/dzl9yxixg/**', // Match the specific path or use '**' for all paths
          },
        ],
      },
  }
};

export default nextConfig;
