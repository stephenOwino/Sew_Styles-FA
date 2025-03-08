import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa"; // New import

const Gallery = () => {
	const { user } = useSelector((state) => state.auth);
	const { galleries } = useSelector((state) => state.gallery);
	const navigate = useNavigate();

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
					<div
						key={gallery.id}
						className='bg-white p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow'
						onClick={() => navigate(`/gallery/${gallery.id}`)}
					>
						<h2 className='text-xl font-semibold text-gray-700'>
							{gallery.title}
						</h2>
						<p className='text-gray-600'>Skill: {gallery.skill}</p>
						<p className='text-gray-600'>By Tailor ID: {gallery.tailorId}</p>
						<p className='text-sm text-gray-500'>
							Created: {new Date(gallery.createdAt).toLocaleDateString()}
						</p>
						<div className='mt-2 space-y-2'>
							{gallery.images && gallery.images.length > 0 ? (
								gallery.images.slice(0, 3).map(
									(
										image // Limit to 3 images
									) => (
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
										</div>
									)
								)
							) : (
								<p className='text-sm text-gray-500'>
									No images in this gallery.
								</p>
							)}
							{gallery.images && gallery.images.length > 3 && (
								<p className='text-sm text-gray-500'>
									+{gallery.images.length - 3} more...
								</p>
							)}
						</div>
						{user && user.role === "TAILOR" && user.id === gallery.userId && (
							<div className='mt-2 flex justify-end'>
								<FaPlus
									onClick={(e) => {
										e.stopPropagation();
										navigate(`/upload-image/${gallery.id}`);
									}}
									className='text-green-600 hover:text-green-800 cursor-pointer text-xl'
									title='Add Image'
								/>
							</div>
						)}
					</div>
				))
			)}
		</div>
	);
};

export default Gallery;
