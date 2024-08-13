const knex = requireKnex();
const baseRepo = requireUtil("baseRepo");

module.exports = async (payload) => {
	try {
		console.log({ payload });

		let result = await knex.transaction(async (trx) => {
			const user = await trx("auth").where({ email: payload.email }).first();
			console.log({ user });
			if (!user) {
				throw new Error("User not found");
			}
			if (user.password !== payload.password && user.role !== payload.role) {
				throw new Error("Incorrect password or role");
			}

			return user;
		});
		return result;
	} catch (error) {
		throw error;
	}
};
