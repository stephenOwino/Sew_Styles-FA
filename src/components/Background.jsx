import React from "react";
import { Link } from "react-router-dom"; // If you're using React Router for navigation
import "../../src/index.css";

export default function BlueprintBackground() {
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
				</header>

				<div className='text-center'>
					<h2 className='text-4xl md:text-5xl font-semibold text-white leading-tight max-w-3xl mx-auto text-center'>
						Experience the Art of Precision Tailoring for Unmatched Elegance
					</h2>

					<p className='mt-4 text-lg max-w-2xl mx-auto'>
						Join a community of passionate tailors and fashion enthusiasts,
						where individuality and craftsmanship come together to create
						exquisite, custom-made fashion that elevates your personal style.
					</p>

					{/* Redirect to Gallery Page */}
					<Link to='/gallery'>
						<button className='mt-6 px-4 md:px-6 py-2 md:py-3 bg-white text-blue-900 rounded shadow hover:bg-blue-900 hover:text-white transition duration-300 animate-pulse'>
							Find a Tailor
						</button>
					</Link>

					{/* Redirect to Register Page */}
					<Link to='/signup'>
						<button className='mt-2 px-4 md:px-6 py-2 md:py-3 border border-white rounded text-white hover:bg-white hover:text-blue-900 transition duration-300'>
							Join Now
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
