import axios from "axios";

// Base URL for your API
const API_BASE_URL = "https://api.example.com";

// Login API call
export const loginUser = async (credentials) => {
	const response = await axios.post(`${API_BASE_URL}/login`, credentials);
	return response.data;
};

// Signup API call
export const signupUser = async (userData) => {
	const formData = new FormData();
	Object.keys(userData).forEach((key) => formData.append(key, userData[key]));
	const response = await axios.post(`${API_BASE_URL}/signup`, formData, {
		headers: { "Content-Type": "multipart/form-data" },
	});
	return response.data;
};

// Fetch user profile
export const useUserProfile = () => {
	// Assuming you have some logic here to fetch user profile
	// You can use React Query or similar libraries to fetch and cache data
};
