import axios from "axios";

const API_URL = "api/users"; //backend URL

//Login user
const login = async (userData) => {
	const response = await axios.post(API_URL, userData);

	if (Response.data) {
		localStorage.setItem("user", JSON.stringify(response.data));
	}
	return Response.data;
};

export default loginService;
