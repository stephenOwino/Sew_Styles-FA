import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../slices/signupSlice";

const Navbar = () => {
	const navigate = useNavigate();
	const location = useLocation(); // Get current route location
	const dispatch = useDispatch();

	// Get the user from the Redux store
	const { user } = useSelector((state) => state.signup);

	const [isOpen, setIsOpen] = useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	const handleLogout = () => {
		dispatch(logout());
		dispatch(reset());
		navigate("/"); // Redirect to the home page after logout
	};

	return (
		<nav className='bg-gray-800 p-2 fixed z-50 w-full mt-0'>
			<div className='container mx-auto flex justify-between items-center'>
				{/* Site Logo */}
				<div className='text-white text-lg font-bold flex-shrink-0'>
					<img
						src='https://cdn-icons-png.freepik.com/256/7885/7885612.png?semt=ais_hybrid'
						alt='Site Logo'
						className='h-12'
					/>
				</div>

				{/* Search Bar with Icon */}
				<div className='flex-grow mx-8'>
					<div className='relative'>
						<input
							type='text'
							placeholder='Search...'
							className='w-full max-w-lg pl-10 pr-4 py-2 rounded-full border border-gray-400 focus:outline-none'
						/>
						<span className='absolute inset-y-0 left-3 flex items-center pl-2'>
							<img
								src='https://cdn-icons-png.flaticon.com/512/49/49116.png'
								alt='Search Icon'
								className='h-4 w-4 text-gray-500'
							/>
						</span>
					</div>
				</div>

				{/* Login/Logout Link */}
				<ul>
					{user ? (
						// If user is logged in, show Logout link
						<Link
							onClick={(e) => {
								e.preventDefault(); // Prevent the link navigation
								handleLogout(); // Call the logout function
							}}
							className='block px-4 py-2 hover:bg-gray-200'
						>
							Logout
						</Link>
					) : (
						// If user is not logged in, show Login link
						<li>
							{location.pathname !== "/login" && (
								<Link
									to='/login'
									className='block px-4 py-2 hover:bg-gray-200'
								></Link>
							)}
						</li>
					)}
				</ul>

				{/* Menu Toggle Button for Mobile */}
				<div className='md:hidden'>
					<button
						onClick={toggleMenu}
						className='text-white focus:outline-none mr-8'
					>
						{isOpen ? "Close" : "Menu"}
					</button>
				</div>

				{/* Navigation Links (Desktop) */}
				<div
					className={`hidden md:flex ${
						isOpen ? "block" : "hidden"
					} flex-shrink-0 space-x-8`}
				>
					<Link to='/' className='text-white px-4 py-2'>
						Home
					</Link>
					<Link to='/login' className='text-white px-4 py-2'>
						Login
					</Link>
					<Link to='/signup' className='text-white px-4 py-2'>
						Signup
					</Link>
					<Link to='/about' className='text-white px-4 py-2'>
						About
					</Link>
					<Link to='/services' className='text-white px-4 py-2'>
						Services
					</Link>
					<Link to='/contact' className='text-white px-4 py-2'>
						Contact
					</Link>
				</div>

				{/* User Icon with Dropdown */}
				<div className='relative flex-shrink-0 ml-2'>
					<button onClick={toggleDropdown} className='text-white'>
						<img
							src='https://cdn-icons-png.flaticon.com/128/3135/3135715.png'
							alt='User Icon'
							className='h-8 mr-8'
						/>
					</button>

					{isDropdownOpen && (
						<div className='absolute right-0 mt-2 bg-white text-gray-800 rounded shadow-lg z-50'>
							<Link to='/profile' className='block px-4 py-2 hover:bg-gray-200'>
								Profile
							</Link>
						</div>
					)}
				</div>

				{/* Notification Icon */}
				<div className='relative flex-shrink-0 ml-2'>
					<img
						src='https://cdn-icons-png.flaticon.com/128/10473/10473385.png'
						alt='Notification Icon'
						className='h-8'
					/>
					<span className='absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full px-1'>
						3
					</span>
				</div>
			</div>

			{/* Mobile Navigation Links */}
			{isOpen && (
				<div className='md:hidden bg-gray-800 flex flex-col items-center p-4'>
					<Link
						to='/'
						className='text-white block text-lg py-2'
						onClick={toggleMenu}
					>
						Home
					</Link>
					<Link
						to='/login'
						className='text-white block text-lg py-2'
						onClick={toggleMenu}
					>
						Login
					</Link>
					<Link
						to='/signup'
						className='text-white block text-lg py-2'
						onClick={toggleMenu}
					>
						Signup
					</Link>
					<Link
						to='/about'
						className='text-white block text-lg py-2'
						onClick={toggleMenu}
					>
						About
					</Link>
					<Link
						to='/services'
						className='text-white block text-lg py-2'
						onClick={toggleMenu}
					>
						Services
					</Link>
					<Link
						to='/contact'
						className='text-white block text-lg py-2'
						onClick={toggleMenu}
					>
						Contact
					</Link>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
