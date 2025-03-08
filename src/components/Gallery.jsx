import React, { useEffect } from "react"; // Remove useState
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchGalleries } from "../slices/createGallerySlice"; // For reference, not used here

const Gallery = () => {
	const { user } = useSelector((state) => state.auth);
	const { galleries } = useSelector((state) => state.gallery);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	// Remove useEffect since fetchGalleries is handled in GalleryPage.js
	// No need for local images state since galleries already contain images

	console.log("User:", user);
	console.log("Galleries:", JSON.stringify(galleries, null, 2));

	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
			{galleries.length === 0 ? (
				<p className='text-center text-gray-600 col-span-full'>
					No galleries available.
				</p>
			) : (
				galleries.map((gallery) => (
					<div key={gallery.id} className='bg-white p-4 rounded-lg shadow-md'>
						<h2 className='text-xl font-semibold text-gray-700'>
							{gallery.title}
						</h2>
						<p className='text-gray-600'>By Tailor ID: {gallery.tailorId}</p>
						<p className='text-sm text-gray-500'>
							Created: {new Date(gallery.createdAt).toLocaleDateString()}
						</p>
						<div className='mt-2 space-y-2'>
							{gallery.images && gallery.images.length > 0 ? (
								gallery.images.map((image) => (
									<div key={image.id} className='relative'>
										<img
											src={
												image.imageUrl.startsWith("http")
													? image.imageUrl
													: `http://localhost:8000${image.imageUrl}`
											}
											alt={gallery.title}
											className='w-full h-40 object-cover rounded-md'
											onError={(e) =>
												console.log(`Image failed: ${e.target.src}`)
											}
										/>
										<p className='text-sm text-gray-500'>
											Uploaded:{" "}
											{new Date(image.uploadedAt).toLocaleDateString()}
										</p>
										<p className='text-sm text-gray-600'>
											Likes: {image.likeCount}
										</p>
									</div>
								))
							) : (
								<p className='text-sm text-gray-500'>
									No images in this gallery.
								</p>
							)}
						</div>
						{user && user.role === "TAILOR" && user.id === gallery.userId ? (
							<button
								onClick={() => navigate(`/upload-image/${gallery.id}`)}
								className='mt-4 w-full p-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors'
							>
								Upload Image
							</button>
						) : (
							<p className='mt-4 text-sm text-gray-500'>
								{user ? "Not your gallery" : "Login as tailor to upload"}
							</p>
						)}
					</div>
				))
			)}
		</div>
	);
};

export default Gallery;
