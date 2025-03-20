module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/categories/create',
      handler: 'category.create',
      config: {
        auth: false,
      },
    },
  ],
}; 