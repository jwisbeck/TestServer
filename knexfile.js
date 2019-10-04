// Update with your config settings.
const { get } = require('lodash');

if (process.env.NODE_ENV === undefined) {
  require('dotenv').config({ path: './.env' });
}
const config = {
  client: 'pg',
  connection: {
    host : '142.93.236.158',
    host: get(process, 'env.DB_HOST', 'localhost'),
    user: get(process, 'env.DB_USER', 'dev'),
    password: get(process, 'env.DB_PASS', 'dev'),
    database: get(process, 'env.DB_NAME', 'testdatabase'),
    port: get(process, 'env.DB_PORT', 5433),
    timezone: 'utc'
  },
  migrations: {
    directory: __dirname + '/knex/migrations',
  },
  seeds: {
    directory: __dirname + '/knex/seeds'
  }
}
if (process.env.CODESHIP) {
  config.connection.user = get(process, 'env.PG_USER', 'user');
  config.connection.password = get(process, 'env.PG_PASSWORD', 'password');
  config.connection.database = 'test';
  config.connection.port = 5432;
}
module.exports = {
  development: config,
  production: config,
  testing: config,
  test: config
};
