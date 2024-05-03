const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    ["/remote/*", "/bff/*", "/signin-oidc", "/signout-callback-oidc"],
    createProxyMiddleware ({
      target: "https://localhost:7265",
      secure: false,
    })
  );
};