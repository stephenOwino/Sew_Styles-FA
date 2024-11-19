import axios from "axios";

const API_URL = "api/users"; //backend URL

//Register user
const register = async (userData) => {
	const response = await axios.post(API_URL, userData);

	if (Response.data) {
		localStorage.setItem("user", JSON.stringify(response.data));
	}
	return Response.data;
};

//logout user
const logout = () => {
	localStorage.removeItem("user");
};

const signupService = {
	register,
};

export default signupService;
