const WindiCSSWebpackPlugin = require("windicss-webpack-plugin");

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.target = "electron-renderer";
    }
    config.plugins.push(new WindiCSSWebpackPlugin());
    return config;
  },
  experimental: {
    images: {
      unoptimized: true,
    },
  },
};
