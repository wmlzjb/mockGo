'use strict'
const Mock = require('mockjs');

module.exports.lettersMock = async(ctx, next) => {
    let data = Mock.mock({
        'items|12': [{
            'name|2-4': 'sgxw',
            'description|2-5': 'tenants',
            'monthly': 'Y',
            'day|3-15': 1,
            'amount|1-2': 'sgxw',
            'template|3-4': 'sgxw',
            'id|+1': 1,
        }]
    });

    ctx.body = data.items;
};