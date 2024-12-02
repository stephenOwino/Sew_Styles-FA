import React from "react";

const ContactUs = () => {
	return (
		<div className='bg-gray-50 min-h-screen p-4 sm:p-8'>
			<div className='max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 sm:p-8'>
				<h1 className='text-4xl font-extrabold text-center text-gray-800 mb-8'>
					Contact Us
				</h1>
				<p className='text-lg text-gray-700 leading-relaxed mb-6 text-center'>
					We value your feedback and are here to assist you. Whether you have
					questions, need support, or want to share your thoughts, we are just a
					click away. Reach out to us through any of the following methods:
				</p>

				<div className='mt-6'>
					<h2 className='text-2xl font-bold text-gray-800 mb-4 text-center'>
						Connect With Us
					</h2>

					{/* Email Contact */}
					<div className='flex items-center justify-center mb-4'>
						<span className='text-lg text-gray-700 font-semibold'>Email:</span>
						<a
							href='mailto:support@sewstyle.com'
							className='ml-2 text-blue-600 hover:underline'
						>
							support@sewstyle.com
						</a>
					</div>

					{/* Phone Contact */}
					<div className='flex items-center justify-center mb-4'>
						<span className='text-lg text-gray-700 font-semibold'>Phone:</span>
						<a
							href='tel:+254712345678'
							className='ml-2 text-blue-600 hover:underline'
						>
							+254 712 345 678
						</a>
					</div>

					{/* Social Media Links */}
					<h2 className='text-2xl font-bold text-gray-800 mb-4 text-center'>
						Follow Us
					</h2>
					<div className='flex justify-center space-x-6 mb-6'>
						<a
							href='https://facebook.com/sewstyle'
							className='text-blue-600 hover:text-blue-700'
							target='_blank'
							rel='noopener noreferrer'
						>
							Facebook
						</a>
						<a
							href='https://twitter.com/sewstyle'
							className='text-blue-400 hover:text-blue-500'
							target='_blank'
							rel='noopener noreferrer'
						>
							Twitter
						</a>
						<a
							href='https://instagram.com/sewstyle'
							className='text-pink-500 hover:text-pink-600'
							target='_blank'
							rel='noopener noreferrer'
						>
							Instagram
						</a>
					</div>

					{/* Contact Form */}
					<h2 className='text-2xl font-bold text-gray-800 mb-4 text-center'>
						Send Us a Message
					</h2>
					<form className='space-y-6'>
						<input
							type='text'
							placeholder='Full Name'
							className='w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'
							required
						/>
						<input
							type='email'
							placeholder='Email Address'
							className='w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'
							required
						/>
						<textarea
							placeholder='Your Message'
							className='w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'
							rows='6'
							required
						></textarea>
						<button
							type='submit'
							className='w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200'
						>
							Submit Message
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
