
exports.up = function(knex) {
  await knex.schema.createTable('badge_owners',t=>{
    t.increments('id').primary();
    t.integer('user_id').notNullable();
    t.integer('badge_id').notNullable();
    t.timestamp('earned_on').defaultTo(knex.fn.now());
  }
};

exports.down = function(knex) {
  await knex.schema.dropTableIfExists('badge_owners');
};
