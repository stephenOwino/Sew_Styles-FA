// src/LoginForm.js
import React from "react";

const LoginForm = () => {
	return (
		<section className='bg-gradient-to-r from-blue-300 to-purple-400 min-h-screen flex items-center justify-center'>
			<div className='bg-white rounded-lg shadow-lg p-8 md:p-12 lg:p-16 w-full max-w-md'>
				<h2 className='text-3xl font-bold text-center text-gray-800 mb-6'>
					Login to Your Account
				</h2>
				<form>
					{/* Email Input */}
					<div className='mb-6'>
						<label className='block mb-2 text-sm font-medium text-gray-700'>
							Email Address
						</label>
						<input
							type='email'
							placeholder='Enter your email'
							className='w-full p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200'
							required
						/>
					</div>

					{/* Password Input */}
					<div className='mb-6'>
						<label className='block mb-2 text-sm font-medium text-gray-700'>
							Password
						</label>
						<input
							type='password'
							placeholder='Enter your password'
							className='w-full p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200'
							required
						/>
					</div>

					{/* Remember me checkbox */}
					<div className='flex items-center justify-between mb-6'>
						<label className='flex items-center'>
							<input
								type='checkbox'
								className='h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500'
							/>
							<span className='ml-2 text-sm text-gray-600'>Remember me</span>
						</label>
						<a href='#!' className='text-sm text-blue-600 hover:underline'>
							Forgot password?
						</a>
					</div>

					{/* Submit button */}
					<button
						type='submit'
						className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition duration-200'
					>
						Login
					</button>

					<div className='my-6 flex items-center before:flex-1 before:border-t before:border-gray-300 after:flex-1 after:border-t after:border-gray-300'>
						<p className='mx-4 mb-0 text-center text-gray-600 font-semibold'>
							OR
						</p>
					</div>

					{/* Social login buttons */}
					<a
						className='mb-3 flex w-full items-center justify-center bg-blue-600 text-white font-medium py-2 rounded hover:bg-blue-700 transition duration-200'
						href='#!'
					>
						Continue with Facebook
					</a>
					<a
						className='mb-3 flex w-full items-center justify-center bg-blue-400 text-white font-medium py-2 rounded hover:bg-blue-500 transition duration-200'
						href='#!'
					>
						Continue with Twitter
					</a>
				</form>

				<p className='text-center text-gray-600 mt-4'>
					Don't have an account?{" "}
					<a href='#!' className='text-blue-600 hover:underline'>
						Sign Up
					</a>
				</p>
			</div>
		</section>
	);
};

export default LoginForm;
