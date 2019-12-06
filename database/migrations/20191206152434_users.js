
exports.up = async function(knex) {
  await knex.schema.createTable('users',t=>{
    t.increments('id').primary();
    t.string('name').notNullable();
    t.timestamp('created_at').defaultTo(knex.fn.now());
    t.timestamp('updated_at').defaultTo(knex.fn.now());
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('users');
};
