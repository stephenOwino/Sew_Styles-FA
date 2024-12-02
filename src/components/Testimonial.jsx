import React, { useState, useEffect } from "react";
import "../../src/index.css";

const testimonials = [
	{
		name: "Lindsay Loewenstein",
		text: "The sewing services provided were fantastic! My dress fits perfectly, and the craftsmanship is outstanding. Highly recommend!",
		location: "Nairobi, Kenya",
	},
	{
		name: "WeLearn2Earn",
		text: "I had an amazing experience with the tailor. The attention to detail was impressive. Will definitely be back!",
		location: "Mombasa, Kenya",
	},
	{
		name: "Inna Shal",
		text: "Beautiful work! The designs were exactly what I envisioned, and the fabric quality was top-notch.",
		location: "Kisumu, Kenya",
	},
	{
		name: "NADALY-US",
		text: "Great service and timely delivery. The tailor truly listened to my needs, and the final product was beyond my expectations.",
		location: "Nakuru, Kenya",
	},
];

const TestimonialsCarousel = () => {
	const [index, setIndex] = useState(0);
	const duration = 5000; // Time for each testimonial display in ms

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
		}, duration);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className='flex flex-col items-center justify-center relative overflow-hidden bg-gray-800 py-16 px-4'>
			<h2 className='text-3xl font-extrabold text-center text-white mb-8'>
				What Our Clients Say
			</h2>
			<div className='testimonial-card transition-opacity duration-1000 ease-in-out shadow-lg'>
				<h3 className='text-xl font-semibold text-gray-900'>
					{testimonials[index].name}
				</h3>
				<p className='text-sm text-gray-500'>{testimonials[index].location}</p>
				<p className='mt-4 text-lg italic text-gray-600'>
					"{testimonials[index].text}"
				</p>
			</div>
			<div className='dots-container flex justify-center mt-4'>
				{testimonials.map((_, dotIndex) => (
					<div
						key={dotIndex}
						className={`dot ${dotIndex === index ? "active" : ""}`}
					></div>
				))}
			</div>
		</div>
	);
};

export default TestimonialsCarousel;
