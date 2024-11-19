import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { reset, register } from "../slices/signupSlice";
import Spinner from "./Spinner";

const SignupForm = () => {
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
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
		image: null,
	});

	const { firstName, lastName, email, password, confirmPassword, image } =
		formData;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleFileChange = (e) => {
		setFormData({ ...formData, image: e.target.files[0] });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!firstName || !lastName || !email || !password || !confirmPassword) {
			toast.error("Please fill in all fields.");
			return;
		}

		if (password !== confirmPassword) {
			toast.error("Passwords do not match. Please try again.");
			return;
		}

		// Create FormData to handle both fields and image
		const formDataToSubmit = new FormData();
		formDataToSubmit.append("firstName", firstName);
		formDataToSubmit.append("lastName", lastName);
		formDataToSubmit.append("email", email);
		formDataToSubmit.append("password", password);
		if (image) {
			formDataToSubmit.append("image", image);
		}

		dispatch(register(formDataToSubmit));
	};

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<form
			onSubmit={handleSubmit}
			className='shadow-md rounded px-8 pt-6 pb-0 mb-4'
		>
			{/* First Name */}
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
					value={firstName}
					onChange={handleChange}
					className='shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-white'
					required
				/>
			</div>

			{/* Last Name */}
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
					value={lastName}
					onChange={handleChange}
					className='shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-white'
					required
				/>
			</div>

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

			{/* Confirm Password */}
			<div className='mb-4'>
				<label
					className='block text-white text-sm font-bold mb-2'
					htmlFor='confirmPassword'
				>
					Confirm Password
				</label>
				<input
					type='password'
					id='confirmPassword'
					name='confirmPassword'
					value={confirmPassword}
					onChange={handleChange}
					className='shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-white'
					required
				/>
			</div>

			{/* Profile Image */}
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
					className='shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-white'
					accept='image/*'
					required
				/>
			</div>

			{/* Submit Button */}
			<div className='flex items-center justify-between'>
				<button
					type='submit'
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
					disabled={isLoading}
				>
					{isLoading ? "Signing Up..." : "Sign Up"}
				</button>
			</div>
		</form>
	);
};

export default SignupForm;
