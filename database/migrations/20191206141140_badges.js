
exports.up = async function(knex) {
  await knex.schema.createTable('badges',t=>{
    t.increments('id').primary();
    t.string('name').notNullable();
    t.integer('points').comment('the points value of the badge');
    t.string('image_filename').notNullable();
    t.string('icon_filename').notNullable();
    t.text('url_image');
    t.text('url_icon');
    t.string('description').comment('the description');
    t.timestamp('created_at').defaultTo(knex.fn.now());
    t.timestamp('updated_at').defaultTo(knex.fn.now());
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('badge_owners');
  await knex.schema.dropTableIfExists('badges');
};
