import React from "react";
import CountUp from "react-countup";

const LandingPage = () => {
	return (
		<div className='bg-transparent text-white py-10 flex flex-col items-center'>
			{/* Introduction Section */}
			<div className='text-center'>
				<p className='text-white mb-8'></p>
			</div>

			{/* Counter Section */}
			<div className='grid grid-cols-1 gap-4 text-center'>
				<div className='bg-gray-800 p-6 rounded-full shadow-lg'>
					<h2 className='text-6xl font-bold'>
						<CountUp end={200} duration={10} />+
					</h2>
					<p className='text-xl'>Satisfied Clients</p>
				</div>
				<div className='bg-gray-800 p-6 rounded-full shadow-lg'>
					<h2 className='text-6xl font-bold'>
						<CountUp end={50} duration={10} />+
					</h2>
					<p className='text-xl'>Professional Tailors</p>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
