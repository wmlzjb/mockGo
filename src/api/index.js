'use strict'
const Mock = require('mockjs');
const fetch = require("node-fetch");
const FormData = require('form-data');

module.exports.mockIndex = async(ctx, next) => {
    let apiUrl = '';
    let apiPort = '1997';
    // let data = Mock.mock({
    //     'items|1-10': [{
    //         'name|1-5': 'sgxw'
    //     }]
    // });
    let myProxy = () => {
        if (ctx.request.method === 'GET') {
            return fetch(apiUrl + ':' + apiPort + ctx.request.url, { method: 'GET', headers: { Authorization: ctx.request.header.authorization } }).then(res => {
                return res.json();
            });
        }
        if (ctx.request.method === 'POST') {
            //var form = new FormData();
            // for (let i in ctx.request.body) {
            //     form.append(i.toString(), ctx.request.body[i]);
            // }
            //form.append("json", JSON.stringify(ctx.request.body));
            return fetch(apiUrl + ':' + apiPort + ctx.request.url, { method: 'POST', body: JSON.stringify(ctx.request.body), headers: { Authorization: ctx.request.header.authorization, 'Content-Type': 'application/json', } }).then(res => {
                return res.json();
            });
        }
    }

    ctx.body = await myProxy().then(json => {
        return json;
    });
};