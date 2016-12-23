'use strict'
let jwt = require('koa-jwt');
let JWT_SECRET = 'secret shem';

module.exports = (app, myRouter) => {
    myRouter.get('/authorize', function* authorize() {
        let user = { id: 1, name: 'shem' };
        let token = jwt.sign(user, JWT_SECRET);
        this.response.body = JSON.stringify({ oauth_token: token, user: user });
    });

    app.use(function* (next) {
        try {
            yield next;
        } catch (err) {
            if (401 == err.status) {
                this.status = 401;
                this.body = 'Protected resource, use Authorization header to get access\n';
            } else {
                throw err;
            }
        }
    });

    app.use(function* (next) {
        if (this.url.match(/^\/public/)) {
            this.body = 'unprotected\n';
        } else {
            yield next;
        }
    });

    // Middleware below this line is only reached if JWT token is valid
    app.use(jwt({ secret: JWT_SECRET }));

    // Protected middleware
    app.use(function* () {
        if (this.url.match(/^\/api/)) {
            this.body = 'protected\n';
        }
    });
}