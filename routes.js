const routes = require('next-routes')();

routes
         .add('/record/:address','/details')
         .add('/edit/:address','/edit')
         .add('/pdf/:address','/pdf')
         .add('/list/:address','/list')
         .add('/document/:address','/document')
         .add('/register/:address','/register');    
     
module.exports = routes;