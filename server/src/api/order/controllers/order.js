"use strict";

/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async customOrderController(ctx) {
    try {
        const bodyData = ctx.body;
      return { data: "ok" };
    } catch (err) {
      ctx.body = err;
    }
  },
}));
