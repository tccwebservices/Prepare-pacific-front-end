require('dotenv').config()


module.exports = {
  env: {
    API_URL: process.env.API_URL
  },

  publicRuntimeConfig: {
    // Will be available on both server and client
    API_URL: process.env.API_URL
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}


