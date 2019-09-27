
exports.up = async function(knex) {
  await knex.schema.createTable('ingredients',t=>{
    t.increments('id').primary(),
    t.string('ingredient_name').comment('name of the food'),
    t.string('type').comment('type of food')
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('ingredients');

};
