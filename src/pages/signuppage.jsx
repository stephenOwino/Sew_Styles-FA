import React from "react";
import SignupForm from "../components/auth/SignupForm";
import { Link } from "react-router-dom";

const SignupPage = () => (
	<div className='page-container'>
		<h1 className='page-title'>Sign Up</h1>
		<SignupForm />
		<p className='login-link'>
			Already have an account? <Link to='/login'>Login</Link>
		</p>
	</div>
);

export default SignupPage;
