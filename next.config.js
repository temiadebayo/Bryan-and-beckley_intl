// next.config.js

const {withContentlayer} = require('next-contentlayer')

// Your other code ...


const nextConfig = {

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '',
      },
    ],
  },
  reactStrictMode: true,
};





module.exports = withContentlayer({...nextConfig});
