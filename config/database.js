module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5436),
        database: env('DATABASE_NAME', 'tryfle'),
        username: env('DATABASE_USERNAME', 'tryfle'),
        password: env('DATABASE_PASSWORD', 'tryfle'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
