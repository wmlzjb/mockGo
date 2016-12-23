'use strict'
let Mock = require('mockjs');

module.exports.mockIndex = function *mockIndex(){
    let data = Mock.mock({
        'list|1-10': [
            {
                'name|1-5': 'sgxw'
            }
        ]
    });
    this.response.body = JSON.stringify(data);
};