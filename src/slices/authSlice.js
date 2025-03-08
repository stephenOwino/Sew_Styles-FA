import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../api/authService";

// Get initial state from localStorage
const user = localStorage.getItem("user")
	? JSON.parse(localStorage.getItem("user"))
	: null;

const initialState = {
	user: user,
	token: localStorage.getItem("token"),
	isError: false,
	isLoading: false,
	isSuccess: false,
	message: "",
};

// Register
export const register = createAsyncThunk(
	"auth/register",
	async (userData, thunkAPI) => {
		try {
			const response = await authService.register(userData);
			localStorage.setItem("token", response.token);
			localStorage.setItem(
				"user",
				JSON.stringify({
					id: response.id, // Added from backend response
					email: userData.email,
					firstName: response.firstName,
					role: response.role,
				})
			);
			return {
				token: response.token,
				user: {
					id: response.id, // Include user ID
					email: userData.email,
					firstName: response.firstName,
					role: response.role,
				},
			};
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

// Login
export const login = createAsyncThunk(
	"auth/login",
	async (userData, thunkAPI) => {
		try {
			const response = await authService.login(userData);
			localStorage.setItem("token", response.token);
			localStorage.setItem(
				"user",
				JSON.stringify({
					id: response.id, // Added from backend response
					email: userData.email,
					firstName: response.firstName,
					role: response.role,
				})
			);
			return {
				token: response.token,
				user: {
					id: response.id, // Include user ID
					email: userData.email,
					firstName: response.firstName,
					role: response.role,
				},
			};
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

// Logout
export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
	try {
		await authService.logout();
		return true;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		reset: (state) => {
			state.isError = false;
			state.isLoading = false;
			state.isSuccess = false;
			state.message = "";
		},
	},
	extraReducers: (builder) => {
		builder
			// Register
			.addCase(register.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(register.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.token = action.payload.token;
				state.user = action.payload.user;
			})
			.addCase(register.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				state.token = null;
				state.user = null;
			})
			// Login
			.addCase(login.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.token = action.payload.token;
				state.user = action.payload.user;
			})
			.addCase(login.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				state.token = null;
				state.user = null;
			})
			// Logout
			.addCase(logout.fulfilled, (state) => {
				state.token = null;
				state.user = null;
				state.isSuccess = false;
				state.isError = false;
				state.message = "";
			});
	},
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
