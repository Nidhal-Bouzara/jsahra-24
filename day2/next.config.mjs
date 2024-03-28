/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hips.hearstapps.com',
        port: '',
        pathname: '/vader-prod.s3.amazonaws.com/**',
      },
    ],
  },
};

export default nextConfig;
