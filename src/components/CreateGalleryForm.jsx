import React from "react";

const CreateGalleryForm = ({
	formData,
	handleChange,
	handleSubmit,
	error,
	isLoading,
}) => {
	return (
		<div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-md'>
			<h1 className='text-2xl font-bold text-gray-900 mb-6 text-center'>
				Create Your Gallery
			</h1>
			<form onSubmit={handleSubmit} className='space-y-4'>
				<input
					type='text'
					name='title'
					placeholder='Gallery Title'
					value={formData.title}
					onChange={handleChange}
					required
					className='w-full p-3 border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
				/>
				<input
					type='text'
					name='skill'
					placeholder='Skill (e.g., School Uniforms)'
					value={formData.skill || ""} // Default to empty string
					onChange={handleChange}
					required
					className='w-full p-3 border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
				/>
				<textarea
					name='description'
					placeholder='Description'
					value={formData.description}
					onChange={handleChange}
					className='w-full p-3 border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
				/>
				{error && <p className='text-red-600 text-base font-medium'>{error}</p>}
				<button
					type='submit'
					disabled={isLoading}
					className={`w-full p-3 rounded-md text-white font-semibold transition-colors ${
						isLoading
							? "bg-blue-400 cursor-not-allowed"
							: "bg-blue-600 hover:bg-blue-700"
					}`}
				>
					{isLoading ? "Creating..." : "Create Gallery"}
				</button>
			</form>
		</div>
	);
};

export default CreateGalleryForm;
