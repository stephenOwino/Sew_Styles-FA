// src/SignupForm.js
import React, { useState } from "react";

const SignupForm = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle signup logic here
		console.log("Signup data:", formData);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='bg-gradient-to-r from-blue-300 to-purple-400


 shadow-md rounded px-8 pt-6 pb-8 mb-4'
		>
			<div className='mb-4'>
				<label
					className='block text-gray-700 text-sm font-bold mb-2'
					htmlFor='username'
				>
					First Name
				</label>
				<input
					type='text'
					id='firstName'
					name='firstName'
					value={formData.firstName}
					onChange={handleChange}
					className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700'
					required
				/>
			</div>
			<div className='mb-4'>
				<label
					className='block text-gray-700 text-sm font-bold mb-2'
					htmlFor='username'
				>
					Last Name
				</label>
				<input
					type='text'
					id='lastName'
					name='lastName'
					value={formData.lastName}
					onChange={handleChange}
					className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700'
					required
				/>
			</div>
			<div className='mb-4'>
				<label
					className='block text-gray-700 text-sm font-bold mb-2'
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
					className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700'
					required
				/>
			</div>
			<div className='mb-6'>
				<label
					className='block text-gray-700 text-sm font-bold mb-2'
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
					className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700'
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
