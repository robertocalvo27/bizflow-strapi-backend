'use strict';

/**
 * category controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::category.category', ({ strapi }) => ({
  async create(ctx) {
    try {
      const { name, slug, description } = ctx.request.body;
      
      const category = await strapi.service('api::category.category').create({
        data: {
          name,
          slug,
          description,
          publishedAt: new Date()
        }
      });

      return { data: category };
    } catch (error) {
      ctx.throw(500, error);
    }
  }
})); 