// Update with your config settings.
const { get } = require('lodash');

if (process.env.NODE_ENV === undefined) {
  require('dotenv').config({ path: './.env' });
}
const config = {
  client: 'pg',
  connection: {
    host: get(process, 'env.DB_HOST', 'localhost'),
    user: get(process, 'env.DB_USER', 'dev'),
    password: get(process, 'env.DB_PASS', 'dev'),
    database: get(process, 'env.DB_NAME', 'recipes'),
    port: get(process, 'env.DB_PORT', 5432),
    timezone: 'utc'
  },
  migrations: {
    directory: __dirname + '/database/migrations',
  },
  seeds: {
    directory: __dirname + '/database/seeds'
  }
}
if (process.env.CODESHIP) {
  config.connection.user = get(process, 'env.PG_USER', 'dev');
  config.connection.password = get(process, 'env.PG_PASSWORD', 'testpass');
  config.connection.database = get(process, 'env.PG_NAME', 'testdatabase');
  config.connection.port = 5432;
}
module.exports = {
  development: config,
  production: config,
  testing: config,
  test: config
};
