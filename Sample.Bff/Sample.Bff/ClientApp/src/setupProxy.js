const { legacyCreateProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
        ["/remote/*", "/bff/*", "/signin-oidc", "/signout-callback-oidc", "/log"],
        legacyCreateProxyMiddleware ({
            target: "https://localhost:7265",
            secure: false,
        })
    );
};