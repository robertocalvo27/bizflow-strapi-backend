module.exports = (plugin) => {
  plugin.policies['isOwner'] = async (ctx, next) => {
    if (!ctx.state.user) {
      return false;
    }

    const { id: userId, role } = ctx.state.user;
    
    // Si es admin o editor, permitir acceso
    if (role.name === 'Administrator' || role.name === 'Editor') {
      return await next();
    }

    // Para autores, verificar si son dueños del post
    const { id } = ctx.params;
    const [post] = await strapi.entityService.findMany('api::post.post', {
      filters: {
        id,
        author: userId,
      },
    });

    if (!post) {
      return false;
    }

    return await next();
  };

  return plugin;
}; 