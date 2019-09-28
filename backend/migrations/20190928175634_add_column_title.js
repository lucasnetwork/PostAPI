
exports.up = function(knex) {
    return knex.schema.alterTable('posts',function(table){
        table.string('title',50).notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('posts')
};
