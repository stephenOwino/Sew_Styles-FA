import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { loginUser } from "../../services/api"; // Adjust the import based on your API service location

// Validation Schema
const validationSchema = Yup.object({
	email: Yup.string().email("Invalid email address").required("Required"),
	password: Yup.string().required("Required"),
});

const LoginForm = () => {
	const handleSubmit = async (values) => {
		try {
			await loginUser(values); // Assume loginUser is a function that handles API login
			toast.success("Login successful");
		} catch (error) {
			toast.error("Login failed");
		}
	};

	return (
		<Formik
			initialValues={{ email: "", password: "" }}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}
		>
			{() => (
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
					<button type='submit' className='btn'>
						Login
					</button>
				</Form>
			)}
		</Formik>
	);
};

export default LoginForm;
