
exports.up = function(knex) {
	return knex.schema.createTable('posts',table=>{
		table.increments('id').primary()
		table.string('name').notNull()
		table.string('description',1000).notNull()
		table.string('imageUrl',1000)
		table.binary('content').notNull()
        
	})
  
}

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('posts')
}
