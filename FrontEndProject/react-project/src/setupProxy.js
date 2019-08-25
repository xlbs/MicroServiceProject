const proxy = require('http-proxy-middleware');
const ip = require('ip');

module.exports = function(app) {
    app.use("/api/*", proxy({
        target: 'http://'+ ip.address()+ ':8080',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
            '/api/':'/'
        }
    }))
};

