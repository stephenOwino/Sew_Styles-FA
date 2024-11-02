// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Services from "./components/Services";
import TailorProfilePage from "./components/TailorProfile";
import ChatPage from "./components/Chat";

const App = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/services' element={<Services />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/tailors' element={<TailorProfilePage />} />
				<Route path='/chatpage' element={<ChatPage />} />
			</Routes>
		</Router>
	);
};


export default App;
