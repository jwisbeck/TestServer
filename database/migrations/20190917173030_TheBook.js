
exports.up = async function(knex) {
  await knex.schema.createTable('the_book',t=>{
    t.increments('id').primary(),
    t.integer('dish_id').references('dishes.id').onDelete('CASCADE').comment('dish_id'),
    t.integer('ingredient_id').references('ingredients.id').onDelete('CASCADE').comment('ingredient_id'),
    t.string('amount').comment('intended to be a parsable string')
  })
};
exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('ingredients');
  await knex.schema.dropTableIfExists('dishes');
  await knex.schema.dropTableIfExists('the_book');
};
