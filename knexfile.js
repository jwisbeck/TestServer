// Update with your config settings.

module.exports = {

  development: {
    client: 'postgres',
    connection: {
      host: 'localhost',
      user: 'user',
      password: 'password',
      database: 'recipes',


    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './database/migrations'
    },
    seeds:{
      directory:'./database/seeds'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'recipes',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './database/migrations'
    },
    seeds:{
      directory:'./database/seeds'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'recipes',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'dishes',
      tableName: 'ingredients',
      tableName: 'the_book'
    }
  }

};
