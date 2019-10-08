
exports.up = async function(knex) {
  await knex.schema.createTable('carOwners',t=>{
    t.increments('id').primary(),
    t.string('name').comment('this is a string test'),
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('cars');
  await knex.schema.dropTableIfExists('carOwners');
};
