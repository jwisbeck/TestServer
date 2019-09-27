
exports.up = function(knex) {
  await knex.schema.createTable('cars',t=>{
    t.increments('id').primary(),
    t.string('make'),
    t.string('model'),
    t.number('year'),
    t.string('color'),
    t.integer('owner_id').comment('ownerId').references('carOwners.id').onDelete('CASCADE'),
    t.string('description').comment('the description')
  })
};

exports.down = function(knex) {
  await knex.schema.dropTableIfExists('cars');

};
