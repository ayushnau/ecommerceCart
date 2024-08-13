import axiosObject from "../config";

export function getUser(payload: any) {
	return new Promise((resolve, reject) => {
		let uri = "/user";

		axiosObject
			.post(uri, payload)
			.then((response) => {
				return resolve(response.data);
			})
			.catch((errors) => {
				reject(errors);
			});
	});
}
