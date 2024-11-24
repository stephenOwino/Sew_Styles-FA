import React from "react";

const AboutUs = () => {
	console.log("AboutUs component rendered"); // Debugging log
	return (
		<div className='bg-gray-50 min-h-screen p-4 sm:p-8'>
			<div className='max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 sm:p-8'>
				<h1 className='text-4xl font-extrabold text-center text-gray-800 mb-8'>
					About SewStyle
				</h1>
				<p className='text-lg text-gray-700 leading-relaxed mb-6'>
					Founded by visionary Otiengele and a dedicated team of expert
					artisans, SewStyle was created to connect individuals with talented,
					skilled tailors for custom clothing that speaks to personal style. Our
					platform celebrates the artistry of tailoring, ensuring each garment
					fits perfectly while enhancing your unique sense of fashion.
				</p>

				<div className='bg-blue-50 p-4 rounded-lg mt-6 shadow-md'>
					<h2 className='text-2xl font-bold text-gray-800 mb-4 text-center'>
						Our Mission
					</h2>
					<p className='text-base text-gray-700 leading-relaxed mb-4'>
						At SewStyle, we aim to revolutionize the tailoring experience by
						offering a seamless, user-friendly platform that brings clients and
						talented tailors together. Our mission is to empower both customers
						and artisans, fostering creativity, collaboration, and a deep
						appreciation for craftsmanship.
					</p>
				</div>

				<div className='bg-gray-50 p-4 rounded-lg mt-6 shadow-md'>
					<h2 className='text-2xl font-bold text-gray-800 mb-4 text-center'>
						Who We Are
					</h2>
					<p className='text-base text-gray-700 leading-relaxed mb-4'>
						SewStyle is not just a service; it's a dynamic community of artisans
						and fashion-forward individuals who share a passion for unique,
						custom-made clothing. We work hand in hand with skilled tailors to
						provide a platform that showcases their work while connecting them
						with clients who value high-quality craftsmanship.
					</p>
				</div>

				<div className='bg-blue-50 p-4 rounded-lg mt-6 shadow-md'>
					<h2 className='text-2xl font-bold text-gray-800 mb-4 text-center'>
						Why Choose SewStyle?
					</h2>
					<p className='text-base text-gray-700 leading-relaxed mb-4'>
						At SewStyle, we understand that style is deeply personal. Our
						platform not only highlights the exceptional skills of our tailors
						but also ensures a customized experience for every client. Whether
						you’re looking for bespoke tailoring or want to explore unique,
						handcrafted pieces, SewStyle is here to bring your vision to life.
					</p>
				</div>

				<div className='bg-gray-50 p-4 rounded-lg mt-6 shadow-md'>
					<h2 className='text-2xl font-bold text-gray-800 mb-4 text-center'>
						Join Us in Celebrating Style
					</h2>
					<p className='text-base text-gray-700 leading-relaxed mb-4'>
						Be part of a transformative journey where fashion meets artistry. At
						SewStyle, we’re not just crafting garments; we’re creating timeless
						pieces that reflect your personality and style. Join us today to
						connect with top-tier tailors and celebrate individuality through
						custom fashion.
					</p>
				</div>

				<div className='text-center mt-8'>
					<a
						href='/explore'
						className='inline-block bg-blue-600 text-white py-3 px-6 rounded-lg shadow hover:bg-blue-700 transition duration-300'
					>
						Explore Our Tailors
					</a>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
