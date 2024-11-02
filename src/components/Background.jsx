import React, { useEffect, useState } from "react";
import "../../src/index.css";

export default function BlueprintBackground() {
	const texts = [
		"Transform Your Wardrobe with Custom Tailoring.",
		"Unleash Your Unique Style with Our Expert Tailors.",
		"Experience Personalized Fashion Like Never Before.",
		"Join a Community of Passionate Fashion Enthusiasts.",
	];
	const [displayedText, setDisplayedText] = useState("");

	useEffect(() => {
		const displayText = async () => {
			for (const text of texts) {
				setDisplayedText("");
				for (const letter of text) {
					await new Promise((resolve) => setTimeout(resolve, 150));
					setDisplayedText((prev) => prev + letter);
				}
				await new Promise((resolve) => setTimeout(resolve, 2000));
			}
		};

		displayText();
		return () => {
			setDisplayedText("");
		};
	}, [texts]);

	return (
		<div className='relative h-screen bg-black overflow-hidden'>
			<div className='absolute inset-0 bg-blue-900 transform skew-y-12'></div>
			<div className='relative text-white p-10 md:p-20 flex flex-col items-center justify-center h-full'>
				<header className='flex justify-between items-center w-full mb-10'>
					<img
						src='https://cdn-icons-png.freepik.com/256/7885/7885612.png?semt=ais_hybrid'
						alt='SewStyles Logo'
						className='h-12'
					/>
					<button className='px-4 md:px-6 py-2 md:py-3 border border-white rounded text-white hover:bg-white hover:text-blue-900 transition duration-300'>
						Connect
					</button>
				</header>

				<div className='text-center'>
					<h2 className='text-3xl md:text-4xl font-semibold animate__animated animate__fadeInDown'>
						Elevate Your Style with Tailored Fashion
					</h2>
					<p className='mt-4 text-lg max-w-2xl mx-auto animate__animated animate__fadeIn'>
						Join our vibrant community of skilled tailors and fashion
						enthusiasts. Discover unique, custom-made clothing that reflects
						your individuality and enhances your wardrobe.
					</p>
					<button className='mt-6 px-4 md:px-6 py-2 md:py-3 bg-white text-blue-900 rounded shadow hover:bg-blue-900 hover:text-white transition duration-300 animate-pulse'>
						Explore Our Gallery
					</button>
					<button className='mt-2 px-4 md:px-6 py-2 md:py-3 border border-white rounded text-white hover:bg-white hover:text-blue-900 transition duration-300'>
						Join Now
					</button>
				</div>

				{/* Centered Animated Text Display */}
				<div className='absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 text-center'>
					<div className='text-3xl font-bold text-orange-400 animate__animated animate__fadeIn'>
						{displayedText.split("").map((letter, index) => (
							<span
								key={index}
								className='inline-block animate__animated animate__bounceIn animate__delay-1s'
								style={{ animationDelay: `${index * 0.1}s` }}
							>
								{letter}
							</span>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
