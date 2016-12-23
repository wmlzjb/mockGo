'use strict'
let koa = require('koa');
let Router = require('koa-router');
let logger = require('koa-logger');

let app = koa();
let myRouter = new Router();
let myMock = require('./index');
let myAuth = require('./auth/auth')(app,myRouter);

myRouter.get('/api/*', myMock.mockIndex);

app.use(logger());
app.use(myRouter.routes());
app.listen(3000);