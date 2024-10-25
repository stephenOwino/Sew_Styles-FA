import React from "react";

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

// Component remains the same
const TestimonialsCarousel = () => {
	const allTestimonials = [...testimonials, ...testimonials]; // Duplicate testimonials for seamless scroll

	return (
		<div className='testimonial-container'>
			<div className='testimonial-row'>
				{allTestimonials.map((testimonial, index) => (
					<div key={index} className='testimonial-card'>
						<h3 className='text-lg font-semibold text-white'>
							{testimonial.name}
						</h3>
						<p className='text-sm text-gray-400'>{testimonial.location}</p>
						<p className='mt-2 text-sm text-gray-300'>"{testimonial.text}"</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default TestimonialsCarousel;
