import axios from "axios";

const API_URL = "http://localhost:8000/api";

const galleryService = {
	createGallery: async (galleryData, token) => {
		const response = await axios.post(`${API_URL}/galleries`, galleryData, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return response.data;
	},
	getTailorByUserId: async (userId, token) => {
		const response = await axios.get(`${API_URL}/tailors/by-user/${userId}`, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return response.data;
	},
	getAllImages: async (galleryId, token) => {
		const url = galleryId
			? `${API_URL}/images?galleryId=${galleryId}`
			: `${API_URL}/images`;
		const response = await axios.get(url, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return response.data;
	},
	uploadImage: async (imageData, token) => {
		const formData = new FormData();
		formData.append("image", imageData.file);
		formData.append("galleryId", imageData.galleryId);
		formData.append("tailorId", imageData.tailorId);
		const response = await axios.post(`${API_URL}/images`, formData, {
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "multipart/form-data",
			},
		});
		return response.data;
	},
};

export default galleryService;
