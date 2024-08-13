const knex = requireKnex();
const baseRepo = requireUtil("baseRepo");

module.exports = async (payload) => {
	try {
		payload = baseRepo.addCreatedTimestamps(payload);
		console.log({ payload });
		let result = await knex.transaction(async (trx) => {
			const rows = await trx("auth").insert(payload).returning("*");
			return rows[0];
		});
		return result;
	} catch (error) {
		console.log({ error });
		throw error;
	}
};
