import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../slices/authSlice";

const Navbar = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);

	const [isOpen, setIsOpen] = useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const toggleMenu = () => setIsOpen((prev) => !prev);
	const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

	const handleLogout = () => {
		dispatch(logout());
		dispatch(reset());
		navigate("/");
		setIsOpen(false); // Close mobile menu on logout
	};

	// Navigation links based on auth state
	const navLinks = user
		? [
				{ to: "/", label: "Home" },
				{ to: "/about", label: "About" },
				{ to: "/services", label: "Services" },
				{ to: "/contact", label: "Contact" },
				{ to: "/gallery", label: "Gallery" },
		  ]
		: [
				{ to: "/", label: "Home" },
				{ to: "/login", label: "Login" },
				{ to: "/signup", label: "Signup" },
				{ to: "/about", label: "About" },
				{ to: "/services", label: "Services" },
				{ to: "/contact", label: "Contact" },
		  ];

	return (
		<nav className='bg-gray-900 fixed top-0 left-0 w-full z-50 shadow-lg'>
			<div className='container mx-auto px-4 py-3 flex justify-between items-center'>
				{/* Logo */}
				<Link to='/' className='flex-shrink-0'>
					<img
						src='https://cdn-icons-png.freepik.com/256/7885/7885612.png?semt=ais_hybrid'
						alt='Sew Style Logo'
						className='h-10 w-auto'
					/>
				</Link>

				{/* Search Bar */}
				<div className='hidden lg:flex flex-grow mx-6 max-w-md'>
					<div className='relative w-full'>
						<input
							type='text'
							placeholder='Search for tailors, styles...'
							className='w-full pl-10 pr-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
						/>
						<span className='absolute inset-y-0 left-0 flex items-center pl-3'>
							<img
								src='https://cdn-icons-png.flaticon.com/512/49/49116.png'
								alt='Search Icon'
								className='h-5 w-5 text-gray-400'
							/>
						</span>
					</div>
				</div>

				{/* Desktop Navigation */}
				<div className='hidden lg:flex items-center space-x-6'>
					{navLinks.map((link) => (
						<Link
							key={link.to}
							to={link.to}
							className='text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium transition-colors'
						>
							{link.label}
						</Link>
					))}
					{user && (
						<button
							onClick={handleLogout}
							className='text-gray-300 hover:text-white hover:bg-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors'
						>
							Logout
						</button>
					)}
					{/* User Dropdown */}
					{user && (
						<div className='relative'>
							<button
								onClick={toggleDropdown}
								className='text-gray-300 hover:text-white focus:outline-none'
							>
								<img
									src='https://cdn-icons-png.flaticon.com/128/3135/3135715.png'
									alt='User Icon'
									className='h-8 w-8 rounded-full'
								/>
							</button>
							{isDropdownOpen && (
								<div className='absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50'>
									<Link
										to='/profile'
										className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
										onClick={() => setIsDropdownOpen(false)}
									>
										Profile
									</Link>
									<Link
										to='/settings'
										className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
										onClick={() => setIsDropdownOpen(false)}
									>
										Settings
									</Link>
								</div>
							)}
						</div>
					)}
					{/* Notification Icon */}
					<div className='relative'>
						<img
							src='https://cdn-icons-png.flaticon.com/128/10473/10473385.png'
							alt='Notification Icon'
							className='h-6 w-6 text-gray-300'
						/>
						<span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center'>
							3
						</span>
					</div>
				</div>

				{/* Mobile Menu Button */}
				<div className='lg:hidden'>
					<button
						onClick={toggleMenu}
						className='text-gray-300 hover:text-white focus:outline-none p-2'
					>
						{isOpen ? (
							<svg
								className='h-6 w-6'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M6 18L18 6M6 6l12 12'
								/>
							</svg>
						) : (
							<svg
								className='h-6 w-6'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M4 6h16M4 12h16m-7 6h7'
								/>
							</svg>
						)}
					</button>
				</div>
			</div>

			{/* Mobile Navigation */}
			{isOpen && (
				<div className='lg:hidden bg-gray-900 px-4 py-2'>
					{navLinks.map((link) => (
						<Link
							key={link.to}
							to={link.to}
							className='block text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-md text-base font-medium transition-colors'
							onClick={toggleMenu}
						>
							{link.label}
						</Link>
					))}
					{user && (
						<button
							onClick={handleLogout}
							className='block w-full text-left text-gray-300 hover:text-white hover:bg-red-600 px-3 py-2 rounded-md text-base font-medium transition-colors'
						>
							Logout
						</button>
					)}
					{/* Mobile Search */}
					<div className='relative mt-2'>
						<input
							type='text'
							placeholder='Search...'
							className='w-full pl-10 pr-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
						/>
						<span className='absolute inset-y-0 left-0 flex items-center pl-3'>
							<img
								src='https://cdn-icons-png.flaticon.com/512/49/49116.png'
								alt='Search Icon'
								className='h-5 w-5 text-gray-400'
							/>
						</span>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
