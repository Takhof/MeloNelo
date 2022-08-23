const { createProxyMiddleware } = require("http-proxy-middleware");
//test
module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: `http://proxy.server.com:portnumber`,
      changeOrigin: true,
    })
  );
};
