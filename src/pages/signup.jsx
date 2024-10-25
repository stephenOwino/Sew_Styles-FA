// src/SignupPage.js
import React from "react";
import SignupForm from "../components/SignupForm";

const SignupPage = () => {
	return (
		<div className='max-w-md mx-auto pt-32'>
			<h2 className='text-2xl mb-4 text-center '>Sign Up</h2>
			<SignupForm />
		</div>
	);
};

export default SignupPage;
