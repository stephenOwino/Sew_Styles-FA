import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TailorProfilePage = () => {
	const navigate = useNavigate();

	const [followers, setFollowers] = useState([
		"John Doe",
		"Alice Smith",
		"Bob Johnson",
	]); // Initial followers for demonstration
	const [following, setFollowing] = useState(["Jane Doe"]); // Tailors that the current user is following
	const [isFollowing, setIsFollowing] = useState(following.includes("You")); // Track if currently following
	const [showFollowersList, setShowFollowersList] = useState(false);
	const [showFollowingList, setShowFollowingList] = useState(false);

	const tailor = {
		name: "Jane Doe",
		location: "Nairobi, Kenya",
		contact: {
			phone: "+254123456789",
			email: "janedoe@example.com",
		},
		gallery: [
			"https://example.com/image1.jpg",
			"https://example.com/image2.jpg",
			"https://example.com/image3.jpg",
		],
		reviews: [
			{ id: 1, user: "Alice", comment: "Great service!", stars: 5 },
			{ id: 2, user: "Bob", comment: "Loved the dress!", stars: 4 },
		],
	};

	const handleFollowClick = () => {
		if (!isFollowing) {
			setFollowers([...followers, "You"]); // Add current user to followers
			setFollowing([...following, tailor.name]); // Add tailor to following
		} else {
			setFollowers(followers.filter((follower) => follower !== "You")); // Remove current user from followers
			setFollowing(following.filter((f) => f !== tailor.name)); // Remove tailor from following
		}
		setIsFollowing(!isFollowing);
	};

	return (
		<div className='bg-gray-50 min-h-screen'>
			{/* Navbar */}
			<nav className='bg-gray-800 p-4'>
				<div className='container mx-auto flex justify-between items-center'>
					<h1 className='text-white text-lg font-bold'>Tailor Profile</h1>
					<div className='flex items-center space-x-4'>
						<button
							className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300'
							onClick={() => navigate("/home")}
						>
							Home
						</button>
						<button
							className='bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300'
							onClick={() => navigate("/chatpage")}
						>
							Chat
						</button>
					</div>
				</div>
			</nav>

			{/* Tailor's Profile Section */}
			<div className='container mx-auto mt-16 p-4'>
				<div className='bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row md:space-x-4'>
					{/* Profile Picture */}
					<div className='flex-shrink-0 mb-6 md:mb-0'>
						<img
							src='https://example.com/tailor-profile-pic.jpg'
							alt={`${tailor.name}'s Profile`}
							className='rounded-full h-48 w-48 border-4 border-blue-500'
						/>
					</div>

					{/* Tailor Information */}
					<div className='flex flex-col'>
						<h2 className='text-3xl font-bold text-gray-800'>{tailor.name}</h2>
						<p className='text-gray-600'>{tailor.location}</p>

						{/* Followers and Following Section */}
						<div className='flex space-x-8 mt-2'>
							<div className='text-center'>
								<h3
									className='text-xl font-bold cursor-pointer hover:text-blue-600'
									onClick={() => setShowFollowersList(!showFollowersList)}
								>
									{followers.length} Followers
								</h3>
								{showFollowersList && (
									<ul className='list-disc pl-5 mt-2'>
										{followers.map((follower, index) => (
											<li key={index}>{follower}</li>
										))}
									</ul>
								)}
							</div>

							<div className='text-center'>
								<h3
									className='text-xl font-bold cursor-pointer hover:text-blue-600'
									onClick={() => setShowFollowingList(!showFollowingList)}
								>
									{following.length} Following
								</h3>
								{showFollowingList && (
									<ul className='list-disc pl-5 mt-2'>
										{following.map((followed, index) => (
											<li key={index}>{followed}</li>
										))}
									</ul>
								)}
							</div>
						</div>

						<div className='mt-4'>
							<button
								className={`${
									isFollowing ? "bg-red-500" : "bg-blue-500"
								} text-white py-2 px-4 rounded mr-2 transition duration-300`}
								onClick={handleFollowClick}
							>
								{isFollowing ? "Unfollow" : "Follow"}
							</button>
							<button
								className='bg-green-500 text-white py-2 px-4 rounded transition duration-300'
								onClick={() => navigate("/chatpage")}
							>
								Message
							</button>
						</div>
						<div className='mt-4'>
							<p className='text-gray-700'>Phone: {tailor.contact.phone}</p>
							<p className='text-gray-700'>Email: {tailor.contact.email}</p>
						</div>
					</div>
				</div>

				{/* Location Map */}
				<div className='mt-8'>
					<h3 className='text-xl font-bold'>Location</h3>
					<div className='h-64 bg-gray-300 rounded-lg mt-2'></div>
				</div>

				{/* Tailor's Gallery Section */}
				<div className='mt-8'>
					<h3 className='text-xl font-bold'>Gallery</h3>
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4'>
						{tailor.gallery.map((image, index) => (
							<div
								key={index}
								className='relative overflow-hidden rounded-lg shadow-lg'
							>
								<img
									src={image}
									alt={`Tailor Work ${index + 1}`}
									className='w-full h-40 object-cover'
								/>
								<div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-sm p-2'>
									<span>Likes: 12</span>
									<span className='ml-2'>Comments: 5</span>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Review Section */}
				<div className='mt-8'>
					<h3 className='text-xl font-bold'>Reviews</h3>
					<div className='space-y-4 mt-4'>
						{tailor.reviews.map((review) => (
							<div key={review.id} className='border-b pb-2'>
								<div className='flex items-center'>
									<span className='text-yellow-500'>
										{"⭐".repeat(review.stars)}
									</span>
									<span className='ml-2 font-bold'>{review.user}</span>
								</div>
								<p className='text-gray-700'>{review.comment}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TailorProfilePage;
