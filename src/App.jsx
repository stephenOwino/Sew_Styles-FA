// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom"; // Removed BrowserRouter
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Services from "./components/Services";
import TailorProfilePage from "./components/TailorProfile";
import ChatPage from "./components/Chat";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ExplorePage from "./components/Explore";
import Settings from "./components/Settings";
import SettingsPage from "./pages/SettingsPage";
import CreateImage from "./components/CreateImage";

const App = () => {
	return (
		<>
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
				<Route path='/gallery' element={<ExplorePage />} />
				<Route path='settings' element={<SettingsPage />} />
				<Route path='/chat' element={<ChatPage />} />
				<Route path='/create' element={<CreateImage />} />
			</Routes>
			<ToastContainer />
		</>
	);
};

export default App;
