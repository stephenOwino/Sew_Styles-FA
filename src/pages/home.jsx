import React, { useRef } from "react";
import Counterpage from "./counterpage";
import ImageGrid from "../components/ImageGrid";
import TestimonialsCarousel from "../components/Testimonial";
import Image22 from "../Icons/suit1.jpg";
import Services from "../components/Services";
import Navbar from "../components/Navbar";
import PaymentMethods from "../components/PaymentMethods";
import FAQs from "../components/FAQ";
import ImageCarousel from "../components/ImageGrid";
import Footer from "../components/Footer";
import TailorProfilePage from "../components/TailorProfile";
import BlueprintBackground from "../components/Background";
import MovingBackgroundSection from "../components/MovingBackground";
import MovingBackground from "../components/MovingBackground";
import BackgroundComponent from "../components/backgroundcomponents/BackrgoundComponent";
import AboutUs from "./about";

const Home = () => {
	const servicesRef = useRef(null);

	return (
		<div className='relative bg-cover bg-center text-gray-900'>
			{/* Navbar */}
			<Navbar servicesRef={servicesRef} />

			{/* Top Section with Blueprint Background */}
			<BlueprintBackground />
			{/* Rest of the Homepage */}
			<div ref={servicesRef}>
				<Services />
			</div>

			{/* Additional Sections */}
			<TestimonialsCarousel />
			<MovingBackground />
			<BackgroundComponent />
			<FAQs />
			<AboutUs />
			<PaymentMethods />

			<Footer />
		</div>
	);
};

export default Home;
