import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api";

const login = async (userData) => {
	try {
		const response = await axios.post(`${API_BASE_URL}/auth/login`, userData);
		return response.data; // { token, firstName }
	} catch (error) {
		throw new Error(error.response?.data?.token || "Login failed"); // Handle error message
	}
};

const register = async (userData) => {
	try {
		const response = await axios.post(
			`${API_BASE_URL}/auth/register`,
			userData
		);
		return response.data; // { token }
	} catch (error) {
		throw new Error(error.response?.data?.token || "Registration failed");
	}
};

const logout = () => {
	localStorage.removeItem("token");
	localStorage.removeItem("user");
};

axios.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem("token");
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => Promise.reject(error)
);

const authService = { register, login, logout };
export default authService;
