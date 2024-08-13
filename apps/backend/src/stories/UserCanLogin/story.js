const findKeysFromRequest = requireUtil("findKeysFromRequest");
const knex = requireKnex();
const validator = requireValidator();
const login = require("../../functions/login");

const prepare = ({ reqQuery, reqBody, reqParams, req }) => {
	const payload = findKeysFromRequest(req, ["email", "password", "role"]);
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
		const response = await login(prepareResult);
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
