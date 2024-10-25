import React from "react";
import LoginForm from "../components/auth/LoginForm";
import { Link } from "react-router-dom";

const LoginPage = () => (
	<div className='page-container'>
		<h1 className='page-title'>Login</h1>
		<LoginForm />
		<p className='signup-link'>
			Don't have an account? <Link to='/signup'>Create one</Link>
		</p>
	</div>
);

export default LoginPage;
