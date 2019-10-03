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

  development: {
    client: 'pg',
    connection: {
      host : '142.93.236.158',
      user : 'dev',
      password : 'dbpassword',
      database : 'testdatabase',
      charset: 'utf8'
    },
    migrations: {
      directory: __dirname + '/knex/migrations',
    },
    seeds: {
      directory: __dirname + '/knex/seeds'
    }
  }

};
