import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { signupUser } from "../../services/api"; // Adjust the import based on your API service location

// Validation Schema
const validationSchema = Yup.object({
	email: Yup.string().email("Invalid email address").required("Required"),
	password: Yup.string().required("Required"),
	username: Yup.string().required("Required"),
	profilePicture: Yup.mixed().required("A profile picture is required"),
});

const SignupForm = () => {
	const handleSubmit = async (values) => {
		try {
			// Assume signupUser is a function that handles API signup
			await signupUser(values);
			toast.success("Signup successful");
		} catch (error) {
			toast.error("Signup failed");
		}
	};

	return (
		<Formik
			initialValues={{
				email: "",
				password: "",
				username: "",
				profilePicture: null,
			}}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}
		>
			{({ setFieldValue }) => (
				<Form className='space-y-4'>
					<div>
						<label htmlFor='email' className='block'>
							Email
						</label>
						<Field type='email' name='email' className='input' />
						<ErrorMessage
							name='email'
							component='div'
							className='text-red-500'
						/>
					</div>
					<div>
						<label htmlFor='password' className='block'>
							Password
						</label>
						<Field type='password' name='password' className='input' />
						<ErrorMessage
							name='password'
							component='div'
							className='text-red-500'
						/>
					</div>
					<div>
						<label htmlFor='username' className='block'>
							Username
						</label>
						<Field type='text' name='username' className='input' />
						<ErrorMessage
							name='username'
							component='div'
							className='text-red-500'
						/>
					</div>
					<div>
						<label htmlFor='profilePicture' className='block'>
							Profile Picture
						</label>
						<input
							id='profilePicture'
							name='profilePicture'
							type='file'
							onChange={(event) =>
								setFieldValue("profilePicture", event.currentTarget.files[0])
							}
							className='input'
						/>
						<ErrorMessage
							name='profilePicture'
							component='div'
							className='text-red-500'
						/>
					</div>
					<button type='submit' className='btn'>
						Sign Up
					</button>
				</Form>
			)}
		</Formik>
	);
};

export default SignupForm;
