import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
	uploadImage,
	fetchGalleries,
	fetchTailorId,
	reset,
} from "../slices/createGallerySlice";

const UploadImage = () => {
	const { galleryId } = useParams();
	const { user } = useSelector((state) => state.auth);
	const { tailorId, isLoading, isSuccess, isError, message } = useSelector(
		(state) => state.gallery
	);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [file, setFile] = useState(null);

	useEffect(() => {
		if (user && !tailorId) {
			dispatch(fetchTailorId(user.id))
				.unwrap()
				.catch((err) => {
					console.error("Failed to fetch tailorId:", err);
				});
		}
	}, [user, tailorId, dispatch]);

	useEffect(() => {
		if (isSuccess) {
			dispatch(fetchGalleries());
			navigate("/gallery");
			dispatch(reset());
		}
	}, [isSuccess, navigate, dispatch]);

	const handleFileChange = (e) => {
		setFile(e.target.files[0]);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!file) {
			dispatch({
				type: "gallery/uploadImage/rejected",
				payload: "No file selected",
			});
			return;
		}
		if (!tailorId) {
			dispatch({
				type: "gallery/uploadImage/rejected",
				payload: "Tailor ID still loading—try again soon",
			});
			return;
		}
		console.log(
			"Uploading to gallery:",
			galleryId,
			"File:",
			file.name,
			"Tailor:",
			tailorId
		);
		dispatch(uploadImage({ file, galleryId, tailorId }));
	};

	if (!user || user.role !== "TAILOR") {
		return (
			<div className='text-center mt-10 text-gray-700'>
				Access Denied—Tailors Only
			</div>
		);
	}

	return (
		<div className='min-h-screen bg-gray-100 flex items-center justify-center py-10'>
			<div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-md'>
				<h1 className='text-2xl font-bold text-gray-900 mb-6 text-center'>
					Upload Image to Gallery #{galleryId}
				</h1>
				<form onSubmit={handleSubmit} className='space-y-4'>
					<input
						type='file'
						accept='image/jpeg,image/png,image/jpg' // Updated to match backend
						onChange={handleFileChange}
						className='w-full p-3 border border-gray-300 rounded-md'
					/>
					{isError && (
						<p className='text-red-600 text-base font-medium'>{message}</p>
					)}
					<button
						type='submit'
						disabled={isLoading || !tailorId}
						className={`w-full p-3 rounded-md text-white font-semibold transition-colors ${
							isLoading || !tailorId
								? "bg-blue-400 cursor-not-allowed"
								: "bg-blue-600 hover:bg-blue-700"
						}`}
					>
						{isLoading
							? "Uploading..."
							: tailorId
							? "Upload Image"
							: "Loading Tailor..."}
					</button>
				</form>
			</div>
		</div>
	);
};

export default UploadImage;
