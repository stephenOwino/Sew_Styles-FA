import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "./Spinner";
import { reset, login } from "../slices/signupSlice";

const LoginForm = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.signup
	);

	useEffect(() => {
		if (isError) {
			toast.error(message);
		}
		if (isSuccess || user) {
			toast.success("Signup successful!");
			navigate("/");
		}
		dispatch(reset());
	}, [user, isError, isSuccess, message, navigate, dispatch]);

	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const { email, password } = formData;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	if (isLoading) {
		return <Spinner />;
	}

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!email || !password) {
			toast.error("Please fill in all fields.");
			return;
		}

		dispatch(login({ email, password }));
	};

	return (
		<div className='min-h-screen bg-gray-900 text-white flex items-center justify-center'>
			<form
				onSubmit={handleSubmit}
				className='shadow-md rounded px-8 pt-6 pb-0 mb-4 w-full max-w-sm'
			>
				{/* Email */}
				<div className='mb-4'>
					<label
						className='block text-white text-sm font-bold mb-2'
						htmlFor='email'
					>
						Email
					</label>
					<input
						type='email'
						id='email'
						name='email'
						value={email}
						onChange={handleChange}
						className='shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-white'
						required
					/>
				</div>

				{/* Password */}
				<div className='mb-4'>
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
						value={password}
						onChange={handleChange}
						className='shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-white'
						required
					/>
				</div>

				{/* Remember me */}
				<div className='flex items-center justify-between mb-6'>
					<label className='flex items-center text-white'>
						<input
							type='checkbox'
							className='h-4 w-4 text-blue-500 border-gray-600 rounded focus:ring-blue-600'
						/>
						<span className='ml-2 text-sm'>Remember me</span>
					</label>
					<a href='#!' className='text-sm text-blue-400 hover:underline'>
						Forgot password?
					</a>
				</div>

				{/* Submit Button */}
				<div className='flex items-center justify-between'>
					<button
						type='submit'
						className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
						disabled={isLoading}
					>
						{isLoading ? "Logging In..." : "Login"}
					</button>
				</div>

				{/* Signup link */}
				<p className='text-center text-white mt-4'>
					Don't have an account?{" "}
					<a href='/signup' className='text-blue-400 hover:underline'>
						Sign Up
					</a>
				</p>
			</form>
		</div>
	);
};

export default LoginForm;
