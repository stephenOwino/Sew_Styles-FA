import React, { useState } from "react";
import TailorProfilePage from "./TailorProfile";

const ExplorePage = () => {
	// State for tailors, filters, and application status
	const [tailors, setTailors] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [locationFilter, setLocationFilter] = useState("");
	const [categoryFilter, setCategoryFilter] = useState("");
	const [ratingFilter, setRatingFilter] = useState(0);
	const [hasSearched, setHasSearched] = useState(false); // Tracks if a search was triggered
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	// Placeholder filtering logic
	const handleSearch = () => {
		setHasSearched(true); // Set hasSearched to true when search is triggered
		console.log("Filters applied:", {
			searchTerm,
			locationFilter,
			categoryFilter,
			ratingFilter,
		});
	};

	// Handle "Enter" key press to trigger search
	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			handleSearch();
		}
	};

	// Filtered Tailors Logic
	const filteredTailors = tailors.filter((tailor) => {
		return (
			(tailor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
				tailor.location.toLowerCase().includes(searchTerm.toLowerCase())) &&
			(locationFilter ? tailor.location === locationFilter : true) &&
			(categoryFilter ? tailor.category === categoryFilter : true) &&
			tailor.rating >= ratingFilter
		);
	});

	// Conditional rendering for loading, error, and results
	if (loading) {
		return (
			<div className='flex justify-center items-center h-screen'>
				<p className='text-black text-lg'>Loading tailors...</p>
			</div>
		);
	}

	if (error) {
		return (
			<div className='flex justify-center items-center h-screen'>
				<p className='text-red-600 text-lg'>{error}</p>
			</div>
		);
	}

	return (
		<div className='max-w-7xl mx-auto p-6 bg-white shadow-md rounded-lg'>
			{/* Hero Section */}
			<div className='text-center py-8'>
				<h1 className='text-4xl font-bold text-black'>
					Explore Skilled Tailors
				</h1>
				<p className='text-lg text-black mt-4'>
					Find and connect with the best tailors for your needs.
				</p>
			</div>

			{/* Search and Filter Section */}
			<div className='bg-gray-100 p-4 rounded-lg mb-8 shadow-sm'>
				<h2 className='text-2xl font-semibold text-black mb-4'>Filters</h2>
				<div className='flex flex-wrap gap-4 items-center'>
					<input
						type='text'
						className='w-full sm:w-1/4 px-4 py-2 border border-gray-300 rounded-lg text-black placeholder-black'
						placeholder='Search by name or location'
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						onKeyDown={handleKeyPress} // Triggers search on Enter key
					/>
					<select
						className='w-full sm:w-1/4 px-4 py-2 border border-gray-300 rounded-lg text-black'
						value={locationFilter}
						onChange={(e) => setLocationFilter(e.target.value)}
					>
						<option value='' className='text-black'>
							Location
						</option>
						<option value='Nairobi' className='text-black'>
							Nairobi
						</option>
						<option value='Mombasa' className='text-black'>
							Mombasa
						</option>
						<option value='Nakuru' className='text-black'>
							Nakuru
						</option>
					</select>
					<select
						className='w-full sm:w-1/4 px-4 py-2 border border-gray-300 rounded-lg text-black'
						value={categoryFilter}
						onChange={(e) => setCategoryFilter(e.target.value)}
					>
						<option value='' className='text-black'>
							Category
						</option>
						<option value='Wedding' className='text-black'>
							Wedding
						</option>
						<option value='Casual Wear' className='text-black'>
							Casual Wear
						</option>
						<option value='Custom Suits' className='text-black'>
							Custom Suits
						</option>
					</select>
					<select
						className='w-full sm:w-1/4 px-4 py-2 border border-gray-300 rounded-lg text-black'
						value={ratingFilter}
						onChange={(e) => setRatingFilter(parseFloat(e.target.value))}
					>
						<option value='0' className='text-black'>
							All Ratings
						</option>
						<option value='4' className='text-black'>
							4 Stars & above
						</option>
						<option value='4.5' className='text-black'>
							4.5 Stars & above
						</option>
					</select>
					<button
						className='bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800'
						onClick={handleSearch}
					>
						Search
					</button>
				</div>
			</div>

			{/* Tailor Gallery Grid */}
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
				{/* Show message only if the user has searched */}
				{hasSearched && filteredTailors.length === 0 ? (
					<div className='text-center col-span-full'>
						<p className='text-black text-lg'>
							No tailors found with the selected criteria.
						</p>
						<p className='text-black'>
							Try adjusting your filters or view all tailors.
						</p>
					</div>
				) : (
					filteredTailors.map((tailor) => (
						<TailorProfilePage key={tailor.id} tailor={tailor} />
					))
				)}
			</div>
		</div>
	);
};

export default ExplorePage;
