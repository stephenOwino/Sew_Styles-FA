import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import galleryService from "../api/galleryService";
import axios from "axios";

// Fetch tailor ID thunk
export const fetchTailorId = createAsyncThunk(
	"gallery/fetchTailorId",
	async (userId, { getState, rejectWithValue }) => {
		try {
			const { auth } = getState();
			const token = auth.token;
			const tailor = await galleryService.getTailorByUserId(userId, token);
			return tailor.id;
		} catch (error) {
			return rejectWithValue(error.response?.data?.message || error.message);
		}
	}
);

// Create gallery thunk
export const createGallery = createAsyncThunk(
	"gallery/createGallery",
	async (galleryData, { getState, rejectWithValue }) => {
		try {
			const { auth } = getState();
			const token = auth.token;
			const response = await galleryService.createGallery(galleryData, token);
			return response;
		} catch (error) {
			return rejectWithValue(
				error.response?.data?.description || error.message
			);
		}
	}
);

// Upload image thunk
export const uploadImage = createAsyncThunk(
	"gallery/uploadImage",
	async (imageData, { getState, rejectWithValue }) => {
		try {
			const { auth, gallery } = getState();
			const token = auth.token;
			const tailorId = gallery.tailorId; // Use stored tailorId
			if (!tailorId) {
				return rejectWithValue("Tailor ID not available—fetch it first");
			}
			const fullImageData = { ...imageData, tailorId }; // Add tailorId to imageData
			const response = await galleryService.uploadImage(fullImageData, token);
			return response;
		} catch (error) {
			return rejectWithValue(
				error.response?.data?.description || error.message
			);
		}
	}
);

// Fetch all galleries thunk
export const fetchGalleries = createAsyncThunk(
	"gallery/fetchGalleries",
	async (_, { getState, rejectWithValue }) => {
		try {
			const { auth } = getState();
			const token = auth.token;
			const response = await axios.get("http://localhost:8000/api/galleries", {
				headers: { Authorization: `Bearer ${token}` },
			});
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response?.data?.message || error.message);
		}
	}
);

const initialState = {
	tailorId: null,
	gallery: null,
	image: null,
	galleries: [],
	isLoading: false,
	isSuccess: false,
	isError: false,
	message: "",
};

const createGallerySlice = createSlice({
	name: "gallery",
	initialState,
	reducers: {
		reset: (state) => {
			state.isLoading = false;
			state.isSuccess = false;
			state.isError = false;
			state.message = "";
		},
	},
	extraReducers: (builder) => {
		builder
			// Fetch Tailor ID
			.addCase(fetchTailorId.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchTailorId.fulfilled, (state, action) => {
				state.isLoading = false;
				state.tailorId = action.payload;
			})
			.addCase(fetchTailorId.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload || "Failed to fetch tailor ID";
			})
			// Create Gallery
			.addCase(createGallery.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(createGallery.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.gallery = action.payload;
				state.galleries = [...state.galleries, action.payload];
			})
			.addCase(createGallery.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload || "Failed to create gallery";
			})
			// Upload Image
			.addCase(uploadImage.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(uploadImage.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.image = action.payload;
				state.galleries = state.galleries.map((gallery) =>
					gallery.id === action.payload.galleryId
						? {
								...gallery,
								images: [...(gallery.images || []), action.payload],
						  }
						: gallery
				);
			})
			.addCase(uploadImage.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload || "Failed to upload image";
			})
			// Fetch Galleries
			.addCase(fetchGalleries.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchGalleries.fulfilled, (state, action) => {
				state.isLoading = false;
				state.galleries = action.payload;
			})
			.addCase(fetchGalleries.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload || "Failed to fetch galleries";
			});
	},
});

export const { reset } = createGallerySlice.actions;
export default createGallerySlice.reducer;
