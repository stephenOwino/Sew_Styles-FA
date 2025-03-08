import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGalleries } from "../slices/createGallerySlice";
import Gallery from "../components/Gallery";

const GalleryPage = () => {
	const { user } = useSelector((state) => state.auth);
	const { galleries, isLoading, isError, message } = useSelector(
		(state) => state.gallery
	);
	const dispatch = useDispatch();

	useEffect(() => {
		if (user) {
			dispatch(fetchGalleries());
		}
	}, [user, dispatch]);

	if (!user) {
		return (
			<div className='text-center mt-10 text-gray-700'>
				Please log in to view galleries.
			</div>
		);
	}

	if (isLoading) {
		return (
			<div className='text-center mt-20 text-gray-700'>
				Loading galleries...
			</div>
		);
	}

	if (isError) {
		return (
			<div className='text-center mt-20 text-red-600'>
				{message || "Failed to load galleries"}
			</div>
		);
	}

	return (
		<div className='min-h-screen bg-gray-100 pt-20'>
			<div className='container mx-auto px-4'>
				<h1 className='text-3xl font-bold text-gray-800 mb-6 text-center'>
					Tailor Galleries
				</h1>
				<Gallery galleries={galleries} />
			</div>
		</div>
	);
};

export default GalleryPage;
