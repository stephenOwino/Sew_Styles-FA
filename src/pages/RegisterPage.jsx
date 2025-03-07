import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import RegisterForm from "../components/RegisterForm";
import Spinner from "../spinner/spinner";
import { reset } from "../slices/authSlice";

const RegisterPage = () => {
	const { isSuccess, isError, message, user } = useSelector(
		(state) => state.auth
	);
	const [showWelcome, setShowWelcome] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (isSuccess && user) {
			toast.success("Registration successful!");
			setShowWelcome(true);
			const timer = setTimeout(() => {
				navigate("/"); // Fixed from /home to /
				setShowWelcome(false);
				dispatch(reset());
			}, 2000);
			return () => clearTimeout(timer);
		}
		if (isError) {
			toast.error(message);
			dispatch(reset());
		}
	}, [isSuccess, isError, message, user, navigate, dispatch]);

	return (
		<div className='min-h-screen flex items-center justify-center bg-gray-100'>
			{showWelcome ? <Spinner name={user.firstName} /> : <RegisterForm />}
		</div>
	);
};

export default RegisterPage;
