import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "../slices/signupSlice";

const store = configureStore({
	reducer: {
		signup: signupReducer, // Attach the signupReducer to the "signup" slice of the state
	},
});

export default store;
