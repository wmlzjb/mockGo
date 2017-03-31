'use strict'
const Koa = require('koa');
const convert = require('koa-convert');
const cors = require('kcors');
const Router = require('koa-router');
const logger = require('koa-logger');
const koaBody = require('koa-body');


const app = new Koa();
const myRouter = new Router();
const myMock = require('./index');
const letters = require('./controllers/letters');
//let myAuth = require('./auth/auth')(app, myRouter);

// myRouter.all('*', (ctx, next) => {
//     next();
// });

myRouter.get('/api/letters', letters.lettersMock);

myRouter.all('/api/*', myMock.mockIndex);
//myRouter.post('/api/*', myMock.mockIndex);

app.use(koaBody({ formidable: { uploadDir: __dirname } }));
app.use(convert(cors()));
app.use(convert(logger()));
app.use(myRouter.routes()).use(myRouter.allowedMethods());
app.listen(3000);