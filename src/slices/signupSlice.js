import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import signupService from "../services/signupservice";

// Getting user from localStorage
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
	user: user ? user : null,
	isError: false,
	isLoading: false,
	isSuccess: false,
	message: "",
};

// REGISTER USER
export const register = createAsyncThunk(
	"signup/register",
	async (user, thunkAPI) => {
		try {
			return await signupService.register(user); // Call the register service
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

// LOGIN USER
export const login = createAsyncThunk(
	"signup/login",
	async (user, thunkAPI) => {
		try {
			return await signupService.login(user); // Call the login service
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

// LOGOUT USER
export const logout = createAsyncThunk("signup/logout", async () => {
	await signupService.logout(); // Call the logout service
});

export const signupSlice = createSlice({
	name: "signup",
	initialState,

	reducers: {
		// This reducer sets everything to default (reset state)
		reset: (state) => {
			state.isLoading = false;
			state.isError = false;
			state.isSuccess = false;
			state.message = "";
		},
	},

	extraReducers: (builder) => {
		// Handling register state (pending, fulfilled, rejected)
		builder
			.addCase(register.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(register.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.user = action.payload; // Store user data after registration
			})
			.addCase(register.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				state.user = null; // Reset user data in case of error
			})
			// Handling login state (pending, fulfilled, rejected)
			.addCase(login.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.user = action.payload; // Store user data after login
			})
			.addCase(login.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				state.user = null; // Reset user data in case of error
			})
			// Handling logout
			.addCase(logout.fulfilled, (state) => {
				state.user = null; // Clear user data on logout
				state.isSuccess = false; // You might want to reset the success flag too
				state.isError = false; // Reset error state on logout
				state.message = ""; // Optionally reset any message
			});
	},
});

export const { reset } = signupSlice.actions;
export default signupSlice.reducer;
