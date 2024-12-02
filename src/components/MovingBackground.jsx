import React, { useState, useEffect } from "react";
// import "animate.css";

const MovingBackground = () => {
	const [scrollOffset, setScrollOffset] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollOffset(window.scrollY * 0.1); // Adjust multiplier for more or less movement
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className='relative h-screen overflow-hidden flex items-center justify-center'>
			{/* Background layers */}
			<div className='absolute inset-0 bg-black'></div>
			{/* Static black layer */}
			<div
				className='absolute inset-0 bg-cover bg-center transform transition-transform duration-300'
				style={{
					background: "linear-gradient(135deg, #0a0e3f 70%, transparent 30%)", // Left diagonal blue
					transform: `translateX(${scrollOffset}px)`, // Move only the blue part
				}}
			></div>
			<div
				className='absolute inset-0 bg-cover bg-center transform transition-transform duration-300'
				style={{
					background: "linear-gradient(225deg, #0a0e3f 70%, transparent 30%)", // Right diagonal blue
					transform: `translateX(-${scrollOffset}px)`, // Move the right part opposite to the left
				}}
			></div>
			{/* Content */}
			<div className='relative z-10 p-4 text-center max-w-lg mx-auto'>
				<h1 className='text-4xl md:text-5xl font-bold text-yellow-500'>
					Connect. Create. Inspire.
				</h1>
				<p className='text-lg mt-4 text-gray-300'>
					Join SewStyles to discover a world of tailoring expertise and creative
					collaboration. Whether you're a client looking for a skilled tailor or
					a tailor showcasing your work, our community brings quality and
					craftsmanship to your fingertips.
				</p>
				<button className='mt-6 px-6 py-2 bg-yellow-500 text-black font-bold rounded-md hover:bg-yellow-600 transition duration-300'>
					Explore SewStyles
				</button>
			</div>
		</div>
	);
};

export default MovingBackground;
