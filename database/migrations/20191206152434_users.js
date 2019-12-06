
exports.up = function(knex) {
  await knex.schema.createTable('users',t=>{
    t.increments('id').primary();
    t.timestamp('created_at').defaultTo(knex.fn.now());
    t.timestamp('updated_at').defaultTo(knex.fn.now());
  }
};

exports.down = function(knex) {
  await knex.schema.dropTableIfExists('users');
};
