import React from "react";
import CountUp from "react-countup";
import "../../../src/index.css";
import CustomImageCarousel from "../ImageGrid";

const BackgroundComponent = () => {
	const circularText = "Join the SewStyles Community";

	return (
		<div className='relative bg-black text-white min-h-screen flex flex-col justify-center items-center px-4 sm:px-8'>
			{/* Main Content */}
			<div className='flex flex-col md:flex-row w-full max-w-6xl gap-8 border border-gray-700 rounded-lg p-4 md:p-6 shadow-lg'>
				{/* Text Content Section */}
				<div className='text-content-section flex flex-col justify-between w-full md:w-1/2 text-gray-300'>
					<div className='mt-32 space-y-4'>
						<h2 className='text-3xl font-bold text-center text-yellow-500 mb-4'>
							Join the SewStyles Community
						</h2>
						<div className='mt-4 space-y-6'>
							<p className='text-lg'>
								SewStyles connects you with skilled tailors across Kenya,
								showcasing amazing craftsmanship and unique designs from our
								community.
							</p>
							<p className='text-lg'>
								Whether you're looking to share your sewing expertise or find a
								tailor, explore our{" "}
								<a
									href='#'
									className='text-yellow-500 underline hover:text-yellow-400'
								>
									job board
								</a>{" "}
								for the latest opportunities and collaborations.
							</p>
							<p className='text-lg'>
								If you're a tailor or a user wanting to showcase your work, join
								our platform to reach a wider audience and enhance your creative
								journey!
							</p>
						</div>
						<button className='mt-5 px-6 py-2 border border-white font-bold text-white hover:bg-yellow-500 transition duration-300'>
							GET IN TOUCH!
						</button>
					</div>
				</div>
				{/* Image Carousel Section */}
				<div className='w-full md:w-1/2'>
					<CustomImageCarousel />
				</div>
			</div>

			{/* Counter Section */}
			<div className='counter-section flex flex-col justify-center items-center w-full mt-8 gap-6 border border-gray-500 rounded-lg p-6 shadow-lg'>
				<h3 className='text-2xl md:text-4xl font-bold text-yellow-500 mb-4'>
					Our Achievements
				</h3>
				{/* Align Counter Section Below Text Content on Small Screens */}
				<div className='flex flex-col items-center gap-4 w-full'>
					<div className='bg-transparent p-6 rounded-full shadow-lg text-center w-full max-w-xs'>
						<h2 className='text-4xl md:text-6xl font-bold'>
							<CountUp end={20000} duration={50} />
							K+
						</h2>
						<p className='text-lg md:text-xl'>Satisfied Clients</p>
					</div>
					<div className='bg-transparent p-6 rounded-full shadow-lg text-center w-full max-w-xs'>
						<h2 className='text-4xl md:text-6xl font-bold'>
							<CountUp end={5000} duration={50} />
							K+
						</h2>
						<p className='text-lg md:text-xl'>Professional Tailors</p>
					</div>
				</div>
				{/* Optional Description Below Counter Section */}
				<p className='text-center text-gray-300 mt-4 px-4'>
					Join our growing community and experience the quality service and
					expertise from our talented tailors dedicated to delivering your
					vision.
				</p>
			</div>

			{/* Rotating Circle with Circular Text */}
			<div className='moving-circle p-5'>
				{circularText.split("").map((char, index) => (
					<span
						key={index}
						className='circle-text-char'
						style={{
							transform: `rotate(${index * (360 / circularText.length)}deg)`,
						}}
					>
						{char}
					</span>
				))}
			</div>
		</div>
	);
};

export default BackgroundComponent;
