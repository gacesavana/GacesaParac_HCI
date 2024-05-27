/** @type {import('next').NextConfig} */
const withFonts = require('next-fonts');

const nextConfig = withFonts({
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
  },
  webpack(config, options) {
    return config;
  },
});

module.exports = nextConfig;
