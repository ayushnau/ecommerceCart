import axiosObject from "../config";

export function login(payload: any) {
	return new Promise((resolve, reject) => {
		let uri = "/login";
		console.log({ payload });
		axiosObject
			.post(uri, payload, { withCredentials: true })
			.then((response) => {
				return resolve(response.data);
			})
			.catch((errors) => {
				console.log("Errors", JSON.stringify(errors));
				if (errors && errors?.response?.status === 422) {
					reject(errors.response.data.errors);
				}
				if (errors && errors?.response?.status === 401) {
					reject({
						password: "Required Username Email and Password",
					});
				}
				reject(errors);
			});
	});
}
