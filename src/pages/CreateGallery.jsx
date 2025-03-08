import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
	fetchTailorId,
	createGallery,
	reset,
} from "../slices/createGallerySlice";
import CreateGalleryForm from "../components/CreateGalleryForm";

const CreateGallery = () => {
	const { user } = useSelector((state) => state.auth);
	const { tailorId, isLoading, isSuccess, isError, message } = useSelector(
		(state) => state.gallery
	);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [formData, setFormData] = useState({ title: "", description: "" });

	useEffect(() => {
		if (user && user.role === "TAILOR") {
			dispatch(fetchTailorId(user.id));
		}
		return () => dispatch(reset()); // Cleanup on unmount
	}, [user, dispatch]);

	useEffect(() => {
		if (isSuccess) {
			navigate("/gallery");
			dispatch(reset());
		}
	}, [isSuccess, navigate, dispatch]);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!tailorId) {
			dispatch({
				type: "gallery/createGallery/rejected",
				payload: "Tailor ID not loaded",
			});
			return;
		}
		const payload = { ...formData, tailorId };
		console.log("Sending payload:", payload);
		dispatch(createGallery(payload));
	};

	if (!user) {
		return (
			<div className='text-center mt-10 text-gray-700'>
				Please log in to access this page.
			</div>
		);
	}

	if (user.role !== "TAILOR") {
		return (
			<div className='text-center mt-10 text-gray-700'>
				Access Denied—Tailors Only
			</div>
		);
	}

	return (
		<div className='min-h-screen bg-gray-100 flex items-center justify-center py-10'>
			<CreateGalleryForm
				formData={formData}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				error={isError ? message : ""}
				isLoading={isLoading}
			/>
		</div>
	);
};

export default CreateGallery;
