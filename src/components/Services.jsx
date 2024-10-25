import React from "react";

const Services = () => {
	return (
		<div className='bg-black min-h-screen p-2'>
			<div className='flex flex-col md:flex-row'>
				{/* Left Images Container */}
				<div className='flex flex-col md:mr-4 mb-4 md:mb-0 bg-black'>
					{/* Use grid layout for the left images */}
					<div className='grid grid-cols-2 gap-4'>
						{/* Row 1 */}
						<img
							src='https://images.pexels.com/photos/6766382/pexels-photo-6766382.jpeg?auto=compress&cs=tinysrgb&w=600'
							alt='Tailoring Example 7'
							className='mt-12 object-cover h-full w-full'
						/>
						<img
							src='https://i.etsystatic.com/17638623/r/il/378b25/5648552837/il_600x600.5648552837_rs8u.jpg'
							alt='Tailoring Example 8'
							className='mt-12 object-cover h-full w-full'
						/>
						{/* Row 2 */}
						<img
							src='https://s.alicdn.com/@sc04/kf/Ae02fd91a9c954865907b781f8f08d9dcM.png_720x720q50.jpg'
							alt='Tailoring Example 9'
							className='mt-14 object-cover h-full w-full'
						/>
						<img
							src='https://i.pinimg.com/736x/18/f8/bb/18f8bb2f70f7926528fb2dd8b81e14c2.jpg'
							alt='Tailoring Example 10'
							className='mt-14 object-cover h-full w-full'
						/>
					</div>
				</div>
				{/* Services Card */}
				<div className='max-w-2xl mx-auto rounded-lg shadow-lg p-8 mt-12 bg-black'>
					<h1 className='text-4xl font-extrabold text-center text-white mb-3'>
						Our Services
					</h1>

					<div className='space-y-6'>
						{/* Service 1 */}
						<div className='flex items-center bg-black p-3 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl'>
							<img
								src='https://images.pexels.com/photos/6765650/pexels-photo-6765650.jpeg?auto=compress&cs=tinysrgb&w=600'
								alt='Custom Tailoring'
								className='w-24 h-24 rounded-full mr-4 object-cover'
							/>
							<div>
								<h2 className='text-2xl font-bold text-white mb-2'>
									Custom Tailoring
								</h2>
								<p className='text-lg text-white'>
									We offer bespoke tailoring services, allowing you to create
									unique clothing that fits your personal style perfectly.
									Whether it's a formal suit or a casual outfit, our skilled
									tailors will bring your vision to life.
								</p>
							</div>
						</div>

						{/* Service 2 */}
						<div className='flex items-center bg-black p-3 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl'>
							<img
								src='https://images.pexels.com/photos/6461067/pexels-photo-6461067.jpeg?auto=compress&cs=tinysrgb&w=600'
								alt='Alterations'
								className='w-24 h-24 rounded-full mr-4 object-cover'
							/>
							<div>
								<h2 className='text-2xl font-bold text-white mb-2'>
									Alterations
								</h2>
								<p className='text-lg text-white'>
									Need adjustments to your existing wardrobe? Our alteration
									services ensure that your clothes fit like a glove. From hems
									to resizing, we handle all your alteration needs with
									precision.
								</p>
							</div>
						</div>

						{/* Service 3 */}
						<div className='flex items-center bg-black p-3 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl'>
							<img
								src='https://images.pexels.com/photos/6580555/pexels-photo-6580555.jpeg?auto=compress&cs=tinysrgb&w=600'
								alt='Fashion Consultations'
								className='w-24 h-24 rounded-full mr-4 object-cover'
							/>
							<div>
								<h2 className='text-2xl font-bold text-white mb-2'>
									Fashion Consultations
								</h2>
								<p className='text-lg text-white'>
									Our fashion consultants are here to help you choose styles
									that suit you best. Get personalized advice on fabric choices,
									color palettes, and design options to enhance your wardrobe.
								</p>
							</div>
						</div>

						{/* Service 4 */}
						<div className='flex items-center bg-black p-3 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl'>
							<img
								src='https://images.pexels.com/photos/7363152/pexels-photo-7363152.jpeg?auto=compress&cs=tinysrgb&w=600'
								alt='Online Ordering'
								className='w-24 h-24 rounded-full mr-4 object-cover'
							/>
							<div>
								<h2 className='text-2xl font-bold text-white mb-2'>
									Online Ordering
								</h2>
								<p className='text-lg text-white'>
									Enjoy the convenience of online ordering. Browse our services
									and place your orders from the comfort of your home. We’ll
									handle the rest!
								</p>
							</div>
						</div>

						{/* Button */}
						<div className='flex justify-center'>
							<button className='bg-blue-600 text-white font-semibold py-2 px-2 rounded-lg hover:bg-blue-700 transition-colors'>
								Explore More
							</button>
						</div>
					</div>
				</div>

				{/* Right Images Container */}
				<div className='flex flex-col md:ml-4 bg-black'>
					{/* Use grid layout for the right images */}
					<div className='grid grid-cols-2 gap-4'>
						{/* Row 1 */}
						<img
							src='https://i.etsystatic.com/51844294/r/il/e13c59/6133782383/il_600x600.6133782383_3vzf.jpg'
							alt='Tailoring Example 7'
							className='mt-12 object-cover h-full w-full'
						/>
						<img
							src='https://i.pinimg.com/736x/90/04/f7/9004f74a3b16f564c9b6f154591c28a3.jpg'
							alt='Tailoring Example 8'
							className='mt-12 object-cover h-full w-full'
						/>
						{/* Row 2 */}
						<img
							src='https://loispiration.com/wp-content/uploads/2024/06/img_6833.jpg?w=896'
							alt='Tailoring Example 9'
							className='mt-14 object-cover h-full w-full'
						/>
						<img
							src='https://files.sophie.co.ke/2024/05/288339404_7433_2073.webp'
							alt='Tailoring Example 10'
							className='mt-14 object-cover h-full w-full'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
