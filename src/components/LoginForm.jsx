import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../slices/authSlice";
import Spinner from "../spinner/spinner";

const LoginForm = () => {
	const [formData, setFormData] = useState({ email: "", password: "" });
	const [showPassword, setShowPassword] = useState(false); // State for visibility toggle
	const dispatch = useDispatch();
	const { loading } = useSelector((state) => state.auth);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(login(formData));
	};

	const togglePasswordVisibility = () => {
		setShowPassword((prev) => !prev);
	};

	return (
		<div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-md'>
			<h2 className='text-2xl font-bold mb-6 text-center text-gray-800'>
				Login
			</h2>
			<form onSubmit={handleSubmit} className='space-y-4'>
				<div>
					<input
						type='email'
						name='email'
						placeholder='Email'
						value={formData.email}
						onChange={handleChange}
						required
						className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500'
						autoComplete='email'
					/>
				</div>
				<div className='relative'>
					<input
						type={showPassword ? "text" : "password"} // Toggle type based on state
						name='password'
						placeholder='Password'
						value={formData.password}
						onChange={handleChange}
						required
						className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500'
						autoComplete='current-password'
					/>
					<button
						type='button' // Prevent form submission
						onClick={togglePasswordVisibility}
						className='absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700'
					>
						{showPassword ? (
							<svg
								className='w-5 h-5'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21'
								/>
							</svg>
						) : (
							<svg
								className='w-5 h-5'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
								/>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
								/>
							</svg>
						)}
					</button>
				</div>
				<button
					type='submit'
					disabled={loading}
					className={`w-full p-3 text-white rounded-md ${
						loading
							? "bg-gray-400 cursor-not-allowed"
							: "bg-blue-600 hover:bg-blue-700"
					} transition-colors`}
				>
					{loading ? "Logging in..." : "Login"}
				</button>
			</form>
			{loading && <Spinner />}
		</div>
	);
};

export default LoginForm;
