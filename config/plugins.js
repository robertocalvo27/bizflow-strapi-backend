module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwt: {
        expiresIn: '7d',
      },
      jwtSecret: env('JWT_SECRET', 'your-secret-key'),
      roles: {
        editor: {
          name: 'Editor',
          description: 'Can manage and publish content',
          permissions: {
            'api::post.post': {
              actions: ['create', 'read', 'update', 'delete', 'publish'],
            },
            'api::category.category': {
              actions: ['create', 'read', 'update', 'delete'],
            },
            'api::author.author': {
              actions: ['read'],
            },
          },
        },
        author: {
          name: 'Author',
          description: 'Can create and edit own posts',
          permissions: {
            'api::post.post': {
              actions: ['create', 'read', 'update'],
              conditions: ['isOwner'],
            },
            'api::category.category': {
              actions: ['read'],
            },
            'api::author.author': {
              actions: ['read'],
            },
          },
        },
      },
      ratelimit: {
        interval: 60000,
        max: 100,
      },
      permissions: {
        public: {
          post: {
            find: true,
            findOne: true,
          },
          category: {
            find: true,
            findOne: true,
          },
          author: {
            find: true,
            findOne: true,
          },
        },
      },
    },
  },
}); 