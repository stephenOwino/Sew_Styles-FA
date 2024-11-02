import React from "react";

const AboutUs = () => {
	console.log("AboutUs component rendered"); // Debugging log
	return (
		<div className='bg-gray-50 min-h-screen p-4 sm:p-8'>
			<div className='max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 sm:p-8'>
				<h1 className='text-4xl font-extrabold text-center text-gray-800 mb-8'>
					About Us
				</h1>
				<p className='text-lg text-gray-700 leading-relaxed mb-6'>
					SewStyle was born from the vision of Otiengele, alongside a group of
					passionate artisans, with the desire to bridge the gap between
					talented tailors and individuals seeking custom clothing. Our platform
					is dedicated to celebrating the artistry of tailoring, ensuring that
					everyone can find their perfect fit and express their unique style.
				</p>

				<div className='bg-blue-50 p-4 rounded-lg mt-6 shadow-md'>
					<h2 className='text-2xl font-bold text-gray-800 mb-4 text-center'>
						Our Mission
					</h2>
					<p className='text-base text-gray-700 leading-relaxed mb-4'>
						At SewStyle, we are dedicated to simplifying the tailoring
						experience for our clients. We provide a user-friendly platform that
						connects individuals with talented tailors across Kenya, allowing
						for seamless communication and collaboration. Our mission is to
						empower both clients and tailors, celebrating unique styles and
						craftsmanship.
					</p>
				</div>

				<div className='bg-gray-50 p-4 rounded-lg mt-6 shadow-md'>
					<h2 className='text-2xl font-bold text-gray-800 mb-4 text-center'>
						Who We Are
					</h2>
					<p className='text-base text-gray-700 leading-relaxed mb-4'>
						SewStyle is more than just a service; it's a community of passionate
						artisans and fashion enthusiasts. We work closely with skilled
						tailors to showcase their talents, helping them connect with clients
						who appreciate quality and custom craftsmanship.
					</p>
				</div>

				<div className='bg-blue-50 p-4 rounded-lg mt-6 shadow-md'>
					<h2 className='text-2xl font-bold text-gray-800 mb-4 text-center'>
						Why Choose Us?
					</h2>
					<p className='text-base text-gray-700 leading-relaxed mb-4'>
						We understand that every individual has a unique vision for their
						clothing. Our platform not only highlights the exceptional skills of
						our tailors but also ensures a personalized experience for every
						client. Together, we can create fashion that tells your story and
						reflects your personal style.
					</p>
				</div>

				<div className='bg-gray-50 p-4 rounded-lg mt-6 shadow-md'>
					<h2 className='text-2xl font-bold text-gray-800 mb-4 text-center'>
						Join Us
					</h2>
					<p className='text-base text-gray-700 leading-relaxed mb-4'>
						Join us on this exciting journey to transform your wardrobe with
						custom-made pieces that embody your personality and flair. Together,
						let’s celebrate the artistry of tailoring and create a fashion
						community that thrives on creativity and individuality.
					</p>
				</div>

				<div className='text-center mt-8'>
					<a
						href='/explore'
						className='inline-block bg-blue-600 text-white py-3 px-6 rounded-lg shadow hover:bg-blue-700 transition duration-300'
					>
						Explore Tailors
					</a>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
