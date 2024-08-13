import { createSlice } from "@reduxjs/toolkit";

export const publicationUserSlice = createSlice({
	name: "publicationUserSlice",
	initialState: {
		uuid: "",
		username: "",
		email: "",
		role: "",
		access_token: "",
	},

	reducers: {
		setPublicationUser: (state, action) => {
			console.log({ action });
			return { ...state, ...action.payload };
		},

		clearPublicationUser: (state: any): any => {
			return { username: "", email: "" };
		},
	},
});

export const { setPublicationUser, clearPublicationUser } =
	publicationUserSlice.actions;

export default publicationUserSlice.reducer;
