import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LoginPage from "./pages/loginpage";
import SignupPage from "./pages/signuppage";
import UserProfilePage from "./pages/userprofilepage";

const App = () => (
	<Router>
		<ToastContainer />
		<Routes>
			<Route path='/login' element={<LoginPage />} />
			<Route path='/signup' element={<SignupPage />} />
			<Route path='/profile' element={<UserProfilePage />} />
			<Route path='/' element={<h1>Welcome to the App</h1>} />
		</Routes>
	</Router>
);

export default App;
