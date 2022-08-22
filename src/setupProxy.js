const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/",
    createProxyMiddleware({
      target: "http://localhost:9000",
      changeOrigin: true,
    })
  ),
    app.use(
      "/api",
      createProxyMiddleware({
        target: "http://localhost:9000",
        changeOrigin: true,
      })
    );

    app.use(
      "/api/test",
      createProxyMiddleware({
        target: "http://localhost:9000",
        changeOrigin: true,
      })
    ),
};
