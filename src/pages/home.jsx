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

const Home = () => {
	const servicesRef = useRef(null); // Create a ref for Services

	return (
		<div className='relative bg-cover bg-center text-gray-900 '>
			<Navbar servicesRef={servicesRef} /> {/* Pass the ref to Navbar */}
			{/* Hero Section as a Card */}
			<div className='flex flex-col items-center justify-center text-left relative z-10 pl-10 h-1/2 bg-white '>
				<div className='w-full mt-32 flex justify-start -ml-8'>
					<img
						className='rounded-2xl object-cover w-65'
						src={Image22}
						alt='image'
					/>
				</div>
			</div>
			{/* Counter Section */}
			<div ref={servicesRef}>
				{" "}
				{/* Set the ref on the div wrapping Services */}
				<Services />
			</div>
			{/* Additional Sections */}
			<div className='py-20 px-4 max-w-4xl mx-auto relative z-10'>
				{/* Features Section */}
				<h2 className='text-3xl font-bold text-center mb-8'>Our Features</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					<div className='p-6 bg-white rounded-lg shadow-md'>
						<h3 className='text-xl font-semibold mb-2'>Find Local Tailors</h3>
						<p>Easily browse and connect with talented tailors in your area.</p>
					</div>
					<div className='p-6 bg-white rounded-lg shadow-md'>
						<h3 className='text-xl font-semibold mb-2'>Custom Measurements</h3>
						<p>
							Send your measurements directly to tailor for perfect fitting.
						</p>
					</div>
					<div className='p-6 bg-white rounded-lg shadow-md'>
						<h3 className='text-xl font-semibold mb-2'>Customer Reviews</h3>
						<p>Read reviews from other customers to choose the right tailor.</p>
					</div>
					<div className='p-6 bg-white rounded-lg shadow-md'>
						<h3 className='text-xl font-semibold mb-2'>Affordable Pricing</h3>
						<p>
							Compare prices and find the best deals for your custom clothing.
						</p>
					</div>
				</div>

				{/* Testimonials Section */}
			</div>
			<div>
				<ImageCarousel />
				<Counterpage />
				<PaymentMethods />

				<TestimonialsCarousel />
				<FAQs />
			</div>
			{/* Footer or Additional Info */}
			<div className='py-10 bg-gray-200'>
				<h2 className='text-2xl font-bold text-center'>Get Started Today!</h2>
				<p className='text-center max-w-md mx-auto mt-4'>
					Sign up now and discover the best tailors near you.
				</p>
			</div>
		</div>
	);
};

export default Home;
