'use strict'
let Mock = require('mockjs');

let myApi = (obj) => {
    let data = Mock.mock({
        'list|1-10': [
            {
                'name|1-5': 'sgxw'
            }
        ]
    });
    obj.response.body = JSON.stringify(data);
};

module.exports = myApi;