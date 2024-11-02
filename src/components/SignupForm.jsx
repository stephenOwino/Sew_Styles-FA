// src/SignupForm.js
import React, { useState } from "react";

const SignupForm = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		image: null, // New state for image upload
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	// Handle image file change
	const handleFileChange = (e) => {
		setFormData({ ...formData, image: e.target.files[0] });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const formDataToSubmit = new FormData();

		// Append the form fields to FormData
		for (const key in formData) {
			formDataToSubmit.append(key, formData[key]);
		}

		// Handle signup logic here (send formDataToSubmit to your backend)
		console.log("Signup data:", formDataToSubmit);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className=' shadow-md rounded px-8 pt-6 pb-8 mb-4'
		>
			<div className='mb-4'>
				<label
					className='block text-white text-sm font-bold mb-2'
					htmlFor='firstName'
				>
					First Name
				</label>
				<input
					type='text'
					id='firstName'
					name='firstName'
					value={formData.firstName}
					onChange={handleChange}
					className='shadow appearance-none border rounded w-full py-2 px-3 text-white'
					required
				/>
			</div>
			<div className='mb-4'>
				<label
					className='block text-white text-sm font-bold mb-2'
					htmlFor='lastName'
				>
					Last Name
				</label>
				<input
					type='text'
					id='lastName'
					name='lastName'
					value={formData.lastName}
					onChange={handleChange}
					className='shadow appearance-none border rounded w-full py-2 px-3 text-white'
					required
				/>
			</div>
			<div className='mb-4'>
				<label
					className='block tex-white text-sm font-bold mb-2'
					htmlFor='email'
				>
					Email
				</label>
				<input
					type='email'
					id='email'
					name='email'
					value={formData.email}
					onChange={handleChange}
					className='shadow appearance-none border rounded w-full py-2 px-3 text-white'
					required
				/>
			</div>
			<div className='mb-6'>
				<label
					className='block text-white text-sm font-bold mb-2'
					htmlFor='password'
				>
					Password
				</label>
				<input
					type='password'
					id='password'
					name='password'
					value={formData.password}
					onChange={handleChange}
					className='shadow appearance-none border rounded w-full py-2 px-3 text-white'
					required
				/>
			</div>
			<div className='mb-6'>
				<label
					className='block text-white text-sm font-bold mb-2'
					htmlFor='image'
				>
					Profile Image
				</label>
				<input
					type='file'
					id='image'
					name='image'
					onChange={handleFileChange}
					className='shadow appearance-none border rounded w-full py-2 px-3 text-white'
					accept='image/*' // Accepts image files only
					required
				/>
			</div>
			<div className='flex items-center justify-between'>
				<button
					type='submit'
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
				>
					Sign Up
				</button>
			</div>
		</form>
	);
};

export default SignupForm;
