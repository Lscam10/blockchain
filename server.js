const { createServer } = require('http');
const next = require('next');

const app = next({
    //dev: process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
    dev: process.env.NODE_ENV !== 'production'
    // dev: process.env.NEXTAUTH_SITE = "http://localhost:3000"
});

const routes = require('./routes');
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
    createServer(handler).listen(3001, (err) => {
        if(err) throw err;
        console.log('Ejecutando en localhost:3001');
    });
});
