/** @type {import('next').NextConfig} */
// https://qqzukhdjwzoezvtypwrs.supabase.co/storage/v1/object/public/book-covers/patterns.jpg
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'qqzukhdjwzoezvtypwrs.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/book-covers/*',
      }
    ],
  },
};

export default nextConfig;
