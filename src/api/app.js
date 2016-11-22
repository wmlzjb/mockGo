'use strict'
let koa = require('koa');
let Router = require('koa-router');

let app = koa();
let myRouter = new Router();
let myApi = require('./index');

myRouter.get('/api/*', function* () {
    myApi(this);
});

app.use(myRouter.routes());
app.listen(3000); 