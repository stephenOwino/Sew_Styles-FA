import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import { HeartIcon, FolderIcon } from "@heroicons/react/24/solid";

const Services = () => {
	// State to track the like counts for each image
	const [likeCounts, setLikeCounts] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

	const handleLike = (index) => {
		setLikeCounts((prevCounts) => {
			const newCounts = [...prevCounts];
			newCounts[index]++;
			return newCounts;
		});
	};

	const handleDoubleClick = (index) => {
		handleLike(index); // Double click should also increase the like count
	};

	return (
		<div className='bg-black min-h-screen p-4'>
			<div className='flex flex-col md:flex-row'>
				{/* Left Images Container */}
				<div className='flex flex-col md:mr-4 mb-4 md:mb-0'>
					{/* Use grid layout for the left images */}
					<div className='grid grid-cols-2 gap-4'>
						{/* Row 1 */}
						{[
							"https://images.pexels.com/photos/6766382/pexels-photo-6766382.jpeg?auto=compress&cs=tinysrgb&w=600",
							"https://i.etsystatic.com/17638623/r/il/378b25/5648552837/il_600x600.5648552837_rs8u.jpg",
							"https://s.alicdn.com/@sc04/kf/Ae02fd91a9c954865907b781f8f08d9dcM.png_720x720q50.jpg",
							"https://i.pinimg.com/736x/18/f8/bb/18f8bb2f70f7926528fb2dd8b81e14c2.jpg",
						].map((src, index) => (
							<div
								key={index}
								className='relative group mt-12 rounded-lg overflow-hidden'
								onDoubleClick={() => handleDoubleClick(index)} // Handle double click
							>
								<img
									src={src}
									alt={`Tailoring Example ${index + 1}`}
									className='object-cover h-full w-full rounded-lg shadow-md transition-transform transform group-hover:scale-105'
								/>
								{/* Like Count Display at Top Left */}
								<div className='absolute top-4 left-4 bg-black bg-opacity-60 text-white text-sm font-semibold px-2 py-1 rounded-md shadow-lg'>
									{likeCounts[index]} Likes
								</div>
								<div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
									<div className='flex space-x-4'>
										<button
											className='text-red-500 hover:text-red-700 transition-colors'
											onClick={() => handleLike(index)} // Handle click to like
										>
											<HeartIcon className='h-6 w-6' />
										</button>
										<button className='text-blue-500 hover:text-blue-700 transition-colors'>
											<FolderIcon className='h-6 w-6' />
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Services Card */}
				<div className='max-w-2xl mx-auto rounded-lg shadow-lg p-8 mt-12 bg-black'>
					<h1 className='text-4xl font-extrabold text-center text-white mb-6'>
						Our Services
					</h1>

					<div className='space-y-6'>
						{/* Service 1 */}
						<div className='flex items-center bg-gray-800 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl'>
							<img
								src='https://images.pexels.com/photos/6765650/pexels-photo-6765650.jpeg?auto=compress&cs=tinysrgb&w=600'
								alt='Custom Tailoring'
								className='w-24 h-24 rounded-full mr-4 object-cover'
							/>
							<div>
								<h2 className='text-2xl font-bold text-white mb-2'>
									Custom Tailoring
								</h2>
								<p className='text-lg text-gray-300'>
									We offer bespoke tailoring services, allowing you to create
									unique clothing that fits your personal style perfectly.
									Whether it's a formal suit or a casual outfit, our skilled
									tailors will bring your vision to life.
								</p>
							</div>
						</div>

						{/* Service 2 */}
						<div className='flex items-center bg-gray-800 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl'>
							<img
								src='https://images.pexels.com/photos/6461067/pexels-photo-6461067.jpeg?auto=compress&cs=tinysrgb&w=600'
								alt='Alterations'
								className='w-24 h-24 rounded-full mr-4 object-cover'
							/>
							<div>
								<h2 className='text-2xl font-bold text-white mb-2'>
									Alterations
								</h2>
								<p className='text-lg text-gray-300'>
									Need adjustments to your existing wardrobe? Our alteration
									services ensure that your clothes fit like a glove. From hems
									to resizing, we handle all your alteration needs with
									precision.
								</p>
							</div>
						</div>

						{/* Service 3 */}
						<div className='flex items-center bg-gray-800 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl'>
							<img
								src='https://images.pexels.com/photos/6580555/pexels-photo-6580555.jpeg?auto=compress&cs=tinysrgb&w=600'
								alt='Fashion Consultations'
								className='w-24 h-24 rounded-full mr-4 object-cover'
							/>
							<div>
								<h2 className='text-2xl font-bold text-white mb-2'>
									Fashion Consultations
								</h2>
								<p className='text-lg text-gray-300'>
									Our fashion consultants are here to help you choose styles
									that suit you best. Get personalized advice on fabric choices,
									color palettes, and design options to enhance your wardrobe.
								</p>
							</div>
						</div>

						{/* Service 4 */}
						<div className='flex items-center bg-gray-800 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl'>
							<img
								src='https://images.pexels.com/photos/7363152/pexels-photo-7363152.jpeg?auto=compress&cs=tinysrgb&w=600'
								alt='Online Ordering'
								className='w-24 h-24 rounded-full mr-4 object-cover'
							/>
							<div>
								<h2 className='text-2xl font-bold text-white mb-2'>
									Online Ordering
								</h2>
								<p className='text-lg text-gray-300'>
									Enjoy the convenience of online ordering. Browse our services
									and place your orders from the comfort of your home. We’ll
									handle the rest!
								</p>
							</div>
						</div>

						{/* Button */}
						<div className='flex justify-center mt-6'>
							<Link to='/tailors'>
								<button className='bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors'>
									Explore More
								</button>
							</Link>
						</div>
					</div>
				</div>

				{/* Right Images Container */}
				<div className='flex flex-col md:ml-4'>
					{/* Use grid layout for the right images */}
					<div className='grid grid-cols-2 gap-4'>
						{/* Row 1 */}
						{[
							"https://i.etsystatic.com/51844294/r/il/e13c59/6133782383/il_600x600.6133782383_3vzf.jpg",
							"https://i.pinimg.com/736x/90/04/f7/9004f74a3b16f564c9b6f154591c28a3.jpg",
							"https://loispiration.com/wp-content/uploads/2024/06/img_6833.jpg?w=896",
							"https://files.sophie.co.ke/2024/05/288339404_7433_2073.webp",
						].map((src, index) => (
							<div
								key={index}
								className='relative group mt-12 rounded-lg overflow-hidden'
								onDoubleClick={() => handleDoubleClick(index + 4)} // Handle double click
							>
								<img
									src={src}
									alt={`Tailoring Example ${index + 5}`}
									className='object-cover h-full w-full rounded-lg shadow-md transition-transform transform group-hover:scale-105'
								/>
								{/* Like Count Display at Top Left */}
								<div className='absolute top-4 left-4 bg-black bg-opacity-60 text-white text-sm font-semibold px-2 py-1 rounded-md shadow-lg'>
									{likeCounts[index + 4]} Likes
								</div>
								<div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
									<div className='flex space-x-4'>
										<button
											className='text-red-500 hover:text-red-700 transition-colors'
											onClick={() => handleLike(index + 4)} // Handle click to like
										>
											<HeartIcon className='h-6 w-6' />
										</button>
										<button className='text-blue-500 hover:text-blue-700 transition-colors'>
											<FolderIcon className='h-6 w-6' />
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
