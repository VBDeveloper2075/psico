/** @type {import('next').NextConfig} */
const nextConfig = {
  // Oculta el badge rojo "N" / "Issue" en desarrollo (solo en `npm run dev`)
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
