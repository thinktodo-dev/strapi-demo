'use strict';
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');
/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async updatePrice(ctx){
        // get data discount from Body Request
        let data = JSON.parse(ctx.request.body)
        // get list Activities
        let entity = await strapi.services.activities.find({});
        entity = entity.map(item => {
            console.log(item)
            item.Price = Number(item.Price)*(1 - Number(data.Discount)/100);
            return item
        })
        // update each item of Activities
        for(let index = 0; index < entity.length; index++){
            let id = entity[index].id;
            await strapi.services.activities.update({ id }, entity[index]);
        }
        return sanitizeEntity(entity, { model: strapi.models.activities });
    }
};
