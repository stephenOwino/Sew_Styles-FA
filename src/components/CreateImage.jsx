import React, { useState } from "react";
import { FaTrash, FaEdit, FaUpload } from "react-icons/fa";

const CreateImage = () => {
	const [images, setImages] = useState([]);
	const [newImage, setNewImage] = useState(null);
	const [designName, setDesignName] = useState("");
	const [description, setDescription] = useState("");

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file && file.type.startsWith("image/")) {
			setNewImage(URL.createObjectURL(file));
		} else {
			alert("Please upload a valid image file.");
		}
	};

	const handleAddImage = () => {
		if (newImage) {
			setImages([...images, { src: newImage, name: designName, description }]);
			setNewImage(null);
			setDesignName("");
			setDescription("");
		} else {
			alert("Please select an image and fill in the details.");
		}
	};

	const handleDeleteImage = (index) => {
		const updatedImages = images.filter((_, i) => i !== index);
		setImages(updatedImages);
	};

	return (
		<div className='p-6 bg-white shadow-lg rounded-lg max-w-4xl mx-auto mt-10'>
			<h2 className='text-2xl font-bold mb-6'>Create New Design</h2>

			{/* Upload Section */}
			<div className='mb-6'>
				<label className='block mb-2 text-gray-700'>Upload Image:</label>
				<input
					type='file'
					accept='image/*'
					onChange={handleImageChange}
					className='block w-full border border-gray-300 rounded-lg p-2 mb-4'
				/>
				{newImage && (
					<img
						src={newImage}
						alt='Preview'
						className='w-64 h-64 object-cover rounded-lg mb-4'
					/>
				)}
			</div>

			{/* Design Details */}
			<div className='mb-6'>
				<label className='block mb-2 text-gray-700'>Design Name:</label>
				<input
					type='text'
					value={designName}
					onChange={(e) => setDesignName(e.target.value)}
					className='block w-full border border-gray-300 rounded-lg p-2 mb-4'
					placeholder='Enter design name'
				/>
				<label className='block mb-2 text-gray-700'>Description:</label>
				<textarea
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					className='block w-full border border-gray-300 rounded-lg p-2 mb-4'
					placeholder='Enter description'
					rows={4}
				/>
			</div>

			{/* Action Buttons */}
			<button
				onClick={handleAddImage}
				className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600'
			>
				Add to Gallery
			</button>

			{/* Gallery Management */}
			{images.length > 0 && (
				<div className='mt-10'>
					<h3 className='text-xl font-bold mb-4'>Your Gallery</h3>
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
						{images.map((image, index) => (
							<div key={index} className='relative border rounded-lg p-4'>
								<img
									src={image.src}
									alt={image.name}
									className='w-full h-48 object-cover rounded-lg'
								/>
								<h4 className='text-lg font-bold mt-2'>{image.name}</h4>
								<p className='text-gray-600'>{image.description}</p>
								<div className='absolute top-2 right-2 flex space-x-2'>
									<button
										onClick={() => handleDeleteImage(index)}
										className='text-red-500 hover:text-red-700'
									>
										<FaTrash />
									</button>
									<button className='text-blue-500 hover:text-blue-700'>
										<FaEdit />
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default CreateImage;
