
exports.up = async function(knex) {
  await knex.schema.createTable('dishes',t=>{
    t.increments('id').primary(),
    t.string('dish_name').comment('this is a string test'),
    t.string('description').comment('the description')
  })

};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('dishes');
};
