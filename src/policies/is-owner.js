module.exports = async (policyContext, config, { strapi }) => {
  const { user } = policyContext.state;
  const { id } = policyContext.params;

  if (!user) {
    return false;
  }

  const entity = await strapi.entityService.findOne(
    policyContext.route.plugin ? 
      `plugin::${policyContext.route.plugin}.${policyContext.route.controller}` :
      `api::${policyContext.route.controller}.${policyContext.route.controller}`,
    id,
    {
      populate: ['author'],
    }
  );

  if (!entity) {
    return false;
  }

  return entity.author?.id === user.id;
}; 