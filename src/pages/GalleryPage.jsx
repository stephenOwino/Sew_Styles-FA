import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";

const GalleryPage = () => {
	const { user, token } = useSelector((state) => state.auth);
	const [gallery, setGallery] = React.useState(null);
	const [isLoading, setIsLoading] = React.useState(false);
	const [error, setError] = React.useState("");
	const { id } = useParams();

	useEffect(() => {
		const fetchGallery = async () => {
			setIsLoading(true);
			try {
				const response = await axios.get(
					`http://localhost:8000/api/galleries/${id}`,
					{
						headers: { Authorization: `Bearer ${token}` },
					}
				);
				setGallery(response.data);
			} catch (err) {
				setError(err.response?.data?.description || "Failed to load gallery");
			} finally {
				setIsLoading(false);
			}
		};
		if (user && token && id) {
			// Added id check
			fetchGallery();
		}
	}, [user, token, id]);

	if (!user) {
		return (
			<div className='text-center mt-10 text-gray-700'>
				Please log in to view this gallery.
			</div>
		);
	}

	if (isLoading) {
		return (
			<div className='text-center mt-20 text-gray-700'>Loading gallery...</div>
		);
	}

	if (error) {
		return <div className='text-center mt-20 text-red-600'>{error}</div>;
	}

	if (!gallery) {
		return (
			<div className='text-center mt-20 text-gray-700'>Gallery not found.</div>
		);
	}

	return (
		<div className='min-h-screen bg-gray-100 pt-20'>
			<div className='container mx-auto px-4'>
				<h1 className='text-3xl font-bold text-gray-800 mb-6'>
					{gallery.title}
				</h1>
				<p className='text-gray-600 mb-4'>Skill: {gallery.skill}</p>
				<p className='text-gray-600 mb-4'>By Tailor ID: {gallery.tailorId}</p>
				<p className='text-sm text-gray-500 mb-6'>
					Created: {new Date(gallery.createdAt).toLocaleDateString()}
				</p>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
					{gallery.images && gallery.images.length > 0 ? (
						gallery.images.map((image) => (
							<div key={image.id} className='bg-white p-4 rounded-lg shadow-md'>
								<img
									src={
										image.imageUrl.startsWith("http")
											? image.imageUrl
											: `http://localhost:8000${image.imageUrl}`
									}
									alt={gallery.title}
									className='w-full h-48 object-cover rounded-md'
								/>
								<p className='text-sm text-gray-500 mt-2'>
									Uploaded: {new Date(image.uploadedAt).toLocaleDateString()}
								</p>
								<p className='text-sm text-gray-600'>
									Likes: {image.likeCount}
								</p>
							</div>
						))
					) : (
						<p className='text-gray-600 col-span-full'>
							No images in this gallery yet.
						</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default GalleryPage;
