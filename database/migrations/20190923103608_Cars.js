
exports.up = async function(knex) {
  await knex.schema.createTable('cars',t=>{
    t.increments('id').primary(),
    t.string('make'),
    t.string('model'),
    t.integer('year'),
    t.string('color'),
    t.integer('owner_id').comment('ownerId').references('carOwners.id').onDelete('CASCADE'),
    t.string('description').comment('the description')
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('cars');

};
