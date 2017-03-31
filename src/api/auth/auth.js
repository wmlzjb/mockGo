'use strict'
let jwt = require('koa-jwt');
let JWT_SECRET = 'shem-secret';

module.exports = (app, myRouter) => {
    myRouter.get('/authorize', function(ctx, next) {
        let user = { id: 1, name: 'shem' };
        let token = jwt.sign(user, JWT_SECRET);
        ctx.body = JSON.stringify({ oauth_token: token, user: user });
    });

    myRouter.use(function(ctx, next) {
        return next().catch((err) => {
            if (401 == err.status) {
                ctx.status = 401;
                ctx.body = 'Protected resource, use Authorization header to get access\n';
            } else {
                throw err;
            }
        });
    });

    // Middleware below this line is only reached if JWT token is valid
    myRouter.use(jwt({ secret: JWT_SECRET }));

    // Unprotected middleware 
    myRouter.use(function(ctx, next) {
        if (ctx.url.match(/^\/public/)) {
            ctx.body = 'unprotected\n';
        } else {
            return next();
        }
    });

    // Protected middleware 
    myRouter.use(function(ctx) {
        if (ctx.url.match(/^\/api/)) {
            ctx.body = 'protected\n';
        }
    });
}