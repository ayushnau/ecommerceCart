import React from "react";
import { Dropdown } from "components";
import { login } from "services";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setPublicationUser, setUserDetails } from "store";

export const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const form :any= ({
		email: "",
		username: "",
		password: "",
		role: "publisher",
	});
	const handleValidate = () => {
		if (
			form.value.email == "" ||
			form.value.username == "" ||
			form.value.password == ""
		) {
			alert("please enter correct values");
			return false;
		}
		return true;
	};

	console.log(form.value);
	const handleLogin = async () => {
		console.log("working");
		if (handleValidate()) {
			const response: any = await login(form.value);
			console.log({ response });
			if (response.success) {
				dispatch(setPublicationUser(response.user));
				navigate("/dashboard");
			}
		}
	};
	return (
		<>
			<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<img
						className="mx-auto h-10 w-auto"
						src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
						alt="Your Company"
					/>
					<div className="flex items-center justify-between mt-10">
						<h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 ">
							Login to your account
						</h2>
						<div>
							<Dropdown form={form} />
						</div>
					</div>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form className="space-y-6" action="#" method="POST">
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Email address
							</label>
							<div className="mt-2">
								<input
									onChange={(e) => form.setField("email", e.target.value)}
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									required
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<div className="flex items-center justify-between">
								<label
									htmlFor="password"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Password
								</label>
							</div>
							<div className="mt-2">
								<input
									onChange={(e) => form.setField("password", e.target.value)}
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									required
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<button
								onClick={handleLogin}
								type="submit"
								className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Login
							</button>
						</div>
					</form>

					{/* <div className="mt-10 text-end text-sm text-gray-500">
						<div className="text-sm">
							<div className="font-semibold text-indigo-600 hover:text-indigo-500">
								SignIn As Editor
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</>
	);
};
