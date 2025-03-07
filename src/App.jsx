import React from "react";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store } from "./store/store";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Login from "./pages/LoginPage";
import Signup from "./pages/RegisterPage";
import Services from "./components/Services";
import TailorProfilePage from "./components/TailorProfile";
import ChatPage from "./components/Chat";
import ExplorePage from "./components/Explore";
import SettingsPage from "./pages/SettingsPage";
import CreateImage from "./components/CreateImage";

const App = () => {
	return (
		<Provider store={store}>
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
				<Route path='/settings' element={<SettingsPage />} />
				<Route path='/chat' element={<ChatPage />} />
				<Route path='/create' element={<CreateImage />} />
			</Routes>
			<ToastContainer />
		</Provider>
	);
};

export default App;
