import React from "react";
import { Link } from "react-router-dom";
import PaymentMethods from "./PaymentMethods";

const Footer = () => {
	return (
		<footer className='bg-gray-900 text-white py-8'>
			<div className='container mx-auto px-4'>
				{/* Top Section: Links & Logo */}
				<div className='flex flex-col md:flex-row justify-between items-start'>
					{/* Logo */}
					<div className='text-lg font-bold mb-4 md:mb-0'>
						<Link to='/'>
							<img
								src='https://cdn-icons-png.freepik.com/256/7885/7885612.png?semt=ais_hybrid'
								alt='Site Logo'
								className='h-10'
							/>
						</Link>
					</div>

					{/* Main Navigation Links */}
					<div className='flex flex-col mb-4 md:mb-0'>
						<div className='flex flex-col mb-4'>
							<Link
								to='/about'
								className='text-white hover:text-gray-400 mb-2 transition-colors duration-200'
							>
								About Us
							</Link>
							<Link
								to='/careers'
								className='text-white hover:text-gray-400 mb-2 transition-colors duration-200'
							>
								Careers
							</Link>
							<Link
								to='/contact'
								className='text-white hover:text-gray-400 mb-2 transition-colors duration-200'
							>
								Contact
							</Link>
						</div>
						<div className='flex flex-col'>
							<Link
								to='/help'
								className='text-white hover:text-gray-400 mb-2 transition-colors duration-200'
							>
								Help
							</Link>
							<Link
								to='/terms'
								className='text-white hover:text-gray-400 mb-2 transition-colors duration-200'
							>
								Terms & Conditions
							</Link>
							<Link
								to='/privacy'
								className='text-white hover:text-gray-400 mb-2 transition-colors duration-200'
							>
								Privacy Policy
							</Link>
							<Link
								to='/sitemap'
								className='text-white hover:text-gray-400 mb-2 transition-colors duration-200'
							>
								Site Map
							</Link>
							<Link
								to='/faq'
								className='text-white hover:text-gray-400 transition-colors duration-200'
							>
								FAQs
							</Link>
						</div>
					</div>
				</div>

				{/* Quick Links Section */}
				<div className='mt-8 border-t border-gray-700 pt-4'>
					<h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
					<div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
						<Link
							to='/services'
							className='text-white hover:text-gray-400 transition-colors duration-200'
						>
							Services
						</Link>
						<Link
							to='/blog'
							className='text-white hover:text-gray-400 transition-colors duration-200'
						>
							Blog
						</Link>
						<Link
							to='/portfolio'
							className='text-white hover:text-gray-400 transition-colors duration-200'
						>
							Portfolio
						</Link>
						<Link
							to='/testimonials'
							className='text-white hover:text-gray-400 transition-colors duration-200'
						>
							Testimonials
						</Link>
						<Link
							to='/events'
							className='text-white hover:text-gray-400 transition-colors duration-200'
						>
							Events
						</Link>
						<Link
							to='/partners'
							className='text-white hover:text-gray-400 transition-colors duration-200'
						>
							Our Partners
						</Link>
						<Link
							to='/resources'
							className='text-white hover:text-gray-400 transition-colors duration-200'
						>
							Resources
						</Link>
						<Link
							to='/community'
							className='text-white hover:text-gray-400 transition-colors duration-200'
						>
							Community
						</Link>
					</div>
				</div>

				{/* Middle Section: Contact & Social Media */}
				<div className='flex flex-col md:flex-row justify-between items-center mt-6'>
					{/* Contact Information */}
					<div className='text-sm text-gray-400 mb-4 md:mb-0'>
						<p className='mb-1'>
							Email:{" "}
							<a
								href='mailto:stephenowin233@gmail.com'
								className='text-white hover:underline'
							>
								stephenowin233@gmail.com
							</a>
						</p>
						<p>Phone: +254 114 825 652</p>
					</div>

					{/* Social Media Icons */}
					<div className='flex space-x-6'>
						<a
							href='https://www.facebook.com/facebook.com.stev/'
							target='_blank'
							rel='noopener noreferrer'
							className='hover:opacity-75 transition-opacity'
						>
							<img
								src='https://cdn-icons-png.flaticon.com/512/174/174848.png'
								alt='Facebook'
								className='h-7'
							/>
						</a>
						<a
							href='https://twitter.com'
							target='_blank'
							rel='noopener noreferrer'
							className='hover:opacity-75 transition-opacity'
						>
							<img
								src='https://cdn-icons-png.flaticon.com/512/733/733579.png'
								alt='Twitter'
								className='h-7'
							/>
						</a>
						<a
							href='https://www.instagram.com/otiengele/'
							target='_blank'
							rel='noopener noreferrer'
							className='hover:opacity-75 transition-opacity'
						>
							<img
								src='https://cdn-icons-png.flaticon.com/512/174/174855.png'
								alt='Instagram'
								className='h-7'
							/>
						</a>
						<a
							href='https://www.linkedin.com/in/stephen-otieno-847264252/'
							target='_blank'
							rel='noopener noreferrer'
							className='hover:opacity-75 transition-opacity'
						>
							<img
								src='https://cdn-icons-png.flaticon.com/512/174/174857.png'
								alt='LinkedIn'
								className='h-7'
							/>
						</a>
						<a
							href='https://github.com/stephenOwino'
							target='_blank'
							rel='noopener noreferrer'
							className='hover:opacity-75 transition-opacity'
						>
							<img
								src='https://cdn-icons-png.flaticon.com/512/733/733553.png'
								alt='GitHub'
								className='h-7'
							/>
						</a>
					</div>
				</div>

				{/* Newsletter Signup */}
				<div className='mt-8'>
					<h3 className='text-lg font-semibold mb-2'>
						Subscribe to our Newsletter
					</h3>
					<div className='flex flex-col md:flex-row items-center'>
						<input
							type='email'
							placeholder='Your email address'
							className='p-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-200'
						/>
						<button className='mt-2 md:mt-0 md:ml-2 px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-500 transition duration-200'>
							Subscribe
						</button>
					</div>
				</div>

				{/* Bottom Section: Copyright */}
				<div className='mt-8 border-t border-gray-700 pt-4 text-center text-xs text-gray-500'>
					<p>
						&copy; {new Date().getFullYear()} Your Company. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
