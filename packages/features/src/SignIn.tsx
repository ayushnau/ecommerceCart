import { Dropdown } from "components";
import { login, register } from "services";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setPublicationUser, setUserDetails } from "store";
import { useState } from "react";

export default function Signin() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [showSignIn, setShowSignIn] = useState(true);
	const form:any = ({
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
	const handleLoginValidate = () => {
		if (form.value.email == "" || form.value.password == "") {
			alert("please enter correct values");
			return false;
		}
		return true;
	};
	const handleLogin = async () => {
		if (handleLoginValidate()) {
			const response: any = await login(form.value);
			console.log({ response });
			if (response.success) {
				dispatch(setPublicationUser(response.user));
				navigate("/dashboard");
			}
		}
	};

	const handleSignin = async () => {
		if (handleValidate()) {
			console.log(form.value, ">>chec here");
			const response: any = await register(form.value);
			console.log({ response });
			if (response.success) {
				dispatch(setPublicationUser({ ...response.user }));
				navigate("/dashboard");
			}
		}
	};
	return (
		<>
			{showSignIn ? (
				<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
					<div className="sm:mx-auto sm:w-full sm:max-w-sm">
						<img
							className="mx-auto h-10 w-auto"
							src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
							alt="Your Company"
						/>
						<div className="flex items-center justify-between mt-10">
							<h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 ">
								Register
							</h2>
							<div>
								<Dropdown form={form} />
							</div>
						</div>
					</div>

					<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
						<div className="space-y-6">
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Name
								</label>
								<div className="mt-2">
									<input
										onChange={(e) => form.setField("username", e.target.value)}
										id="name"
										name="name"
										type="name"
										autoComplete="name"
										required
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
									/>
								</div>
							</div>
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
									onClick={handleSignin}
									type="submit"
									className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>
									Signin
								</button>
							</div>
							<div
								onClick={() => setShowSignIn(false)}
								className="text-sm leading-6 text-indigo-600 hover:text-indigo-500 ml-auto text-end"
							>
								Already a member
							</div>
						</div>

						{/* <div className="mt-10 text-end text-sm text-gray-500">
					<div className="text-sm">
						<div className="font-semibold text-indigo-600 hover:text-indigo-500">
							SignIn As Editor
						</div>
					</div>
				</div> */}
					</div>
				</div>
			) : (
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
									Login
								</h2>
								<div>
									<Dropdown form={form} />
								</div>
							</div>
						</div>

						<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
							<div className="space-y-6">
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
											onChange={(e) =>
												form.setField("password", e.target.value)
											}
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
								<div
									onClick={() => setShowSignIn(true)}
									className="text-sm leading-6 text-indigo-600 hover:text-indigo-500 ml-auto text-end"
								>
									Register
								</div>
							</div>

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
			)}
		</>
	);
}
