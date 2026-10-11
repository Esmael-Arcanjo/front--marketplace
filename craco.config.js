const path = require("path");

const publicPath = process.env.PUBLIC_URL || "";

module.exports = {
  webpack: {
    alias: { "@": path.resolve(__dirname, "src") },
  },
  devServer: (devServerConfig) => ({
    ...devServerConfig,
    allowedHosts: "all",
    webSocketServer: { type: "ws", options: { path: `${publicPath}/ws` } },
  }),
};
