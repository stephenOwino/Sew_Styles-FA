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
import SettingsPage from "./pages/SettingsPage";
import GalleriesList from "./pages/GalleriesList"; // Added import
import GalleryPage from "./pages/GalleryPage";
import CreateGallery from "./pages/CreateGallery";
import UploadImage from "./pages/UploadImage";

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
				<Route path='/settings' element={<SettingsPage />} />
				<Route path='/chat' element={<ChatPage />} />
				<Route path='/gallery' element={<GalleriesList />} />{" "}
				{/* List of galleries */}
				<Route path='/gallery/:id' element={<GalleryPage />} />{" "}
				{/* Single gallery */}
				<Route path='/create-gallery' element={<CreateGallery />} />
				<Route path='/upload-image/:galleryId' element={<UploadImage />} />
			</Routes>
			<ToastContainer />
		</Provider>
	);
};

export default App;
