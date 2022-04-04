
exports.up = function(knex, Promise) {
   return knex.schema.createTable('users',table=>{
       table.increments('id').primary()
       table.string('name').noNull()
       table.string('email').notNull().unique()
       table.string('password').noNull()
       table.boolean('admin').notNull().defaultTo(false)


   })
};

exports.down = function(knex, Promise) {
        return knex.schema.dropTable('users')
};
