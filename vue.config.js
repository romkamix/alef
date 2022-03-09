const publicPath = "/";

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? publicPath : "/",
  devServer: {
    host: process.env.HOST,
    port: 8090,
    allowedHosts: [process.env.HOST],
    https: !!+process.env.IS_HTTPS,
  },
};
