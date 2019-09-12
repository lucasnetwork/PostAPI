
exports.up = function(knex) {
  return knex.schema
    .createTable('posts',function(table){
        table.increments('id').primary()
        table.string('name',255).notNull()
        table.string('imageUrl',1000)
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('posts')
};
