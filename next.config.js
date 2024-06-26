// next.config.js

const { withContentlayer } = require('next-contentlayer');

const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'res.cloudinary.com',
        hostname: 'drive.google.com',
      },
    ],
  },
  reactStrictMode: true,
};

module.exports = withContentlayer({ ...nextConfig });
