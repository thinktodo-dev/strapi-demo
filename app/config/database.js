module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'mariadb'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'strapi'),
        username: env('DATABASE_USERNAME', 'user'),
        password: env('DATABASE_PASSWORD', 'user123'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {
        "pool":{
              "min":0,
               "max":15,
                "idleTimeoutMillis":30000,
                "createTimeoutMillis":30000,
               "acquireTimeoutMillis":30000
         }
        }
    },
  },
});
