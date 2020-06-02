'use strict';
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');
/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async create(ctx) {
        let entity;
        if (ctx.is('multipart')) {
        const { data, files } = parseMultipartData(ctx);
        entity = await strapi.services.activities.create(data, { files });
        } else {
        entity = await strapi.services.activities.create(ctx.request.body);
        }
        await strapi.plugins['email'].services.email.send({
            from: 'thinktodo.dev@gmail.com',
            to: 'info@mallorcard.es',
            subject: 'Create new activities successfully',
            text: 'You create new activities in Strapi!!',
            html: 'You create new activities in Strapi!!',
          });
        return sanitizeEntity(entity, { model: strapi.models.activities });
    },
    async updatePrice(ctx){
        // get data discount from Body Request
        let data = JSON.parse(ctx.request.body)
        // get list Activities
        let entity = await strapi.services.activities.find({});
        entity = entity.map(item => {
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
