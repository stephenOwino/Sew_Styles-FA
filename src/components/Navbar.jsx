import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className='bg-gray-800 p-2 fixed z-50 w-full mt-0 '>
			<div className='container mx-auto flex justify-between items-center'>
				<div className='text-white text-lg font-bold'>
					Find Your <br />
					Perfect Fit
				</div>
				<div className='md:hidden'>
					<button
						onClick={toggleMenu}
						className='text-white focus:outline-none'
					>
						{isOpen ? "Close" : "Menu"}
					</button>
				</div>
				<div
					className={`hidden md:flex ${isOpen ? "block" : "hidden"} md:block`}
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
			</div>
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
