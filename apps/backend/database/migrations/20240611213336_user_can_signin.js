exports.up = async function (knex) {
	await knex.raw(`create extension if not exists "uuid-ossp"`);
	return knex.schema.createTable("auth", function (table) {
		table
			.uuid("uuid")
			.notNullable()
			.primary()
			.defaultTo(knex.raw("uuid_generate_v4()"));
		table.string("username", 255).notNullable();
		table.string("email", 255);
		table.string("password", 255).notNullable();
		table.string("role", 255).notNullable();
		table.string("access_token", 255).defaultTo(knex.raw("uuid_generate_v4()"));
		table.datetime("created_at");
		table.datetime("updated_at");
		table.datetime("deleted_at");
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable("auth");
};
