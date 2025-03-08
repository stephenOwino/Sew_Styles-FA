import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import galleryReducer from "../slices/createGallerySlice";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		gallery: galleryReducer,
	},
});
