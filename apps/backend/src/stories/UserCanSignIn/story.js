const findKeysFromRequest = requireUtil("findKeysFromRequest");
const knex = requireKnex();
const validator = requireValidator();
const signIn = require("../../functions/signIn");

const prepare = ({ reqQuery, reqBody, reqParams, req }) => {
	const payload = findKeysFromRequest(req, [
		"email",
		"username",
		"password",
		"role",
	]);
	console.log(payload);
	return payload;
};

const authorize = async ({ prepareResult }) => {
	try {
		return true;
	} catch (error) {
		throw error;
	}
};
const validateInput = async (prepareResult) => {
	const constraints = {
		username: {
			presence: {
				allowEmpty: false,
				message: "^Username is Required",
			},
		},
		email: {
			presence: {
				allowEmpty: false,
				message: "^Email is Required",
			},
		},
		password: {
			presence: {
				allowEmpty: false,
				message: "^password is Required",
			},
		},
		role: {
			presence: {
				allowEmpty: false,
				message: "^role is Required",
			},
		},
	};

	return validator(prepareResult, constraints);
};

const handle = async ({ prepareResult, authorizeResult }) => {
	try {
		await validateInput(prepareResult);
		const response = await signIn(prepareResult);
		return response;
	} catch (error) {
		throw error;
	}
};

const respond = async ({ handleResult }) => {
	try {
		return { success: true, user: handleResult };
	} catch (error) {
		throw error;
	}
};

module.exports = {
	prepare,
	authorize,
	handle,
	respond,
};
