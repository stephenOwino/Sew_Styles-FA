import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	FaDownload,
	FaHeart,
	FaRegHeart,
	FaSave,
	FaInbox,
	FaUserAlt,
	FaCog,
	FaUsers,
	FaBook,
} from "react-icons/fa";

const TailorProfilePage = () => {
	const navigate = useNavigate();

	const userId = "User1";

	const tailor = {
		id: "Tailor1",
		name: "Jane Doe",
		location: "Nairobi, Kenya",
		contact: {
			phone: "+254123456789",
			email: "janedoe@example.com",
		},
		gallery: [
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcp6M02nwJe4bXJxyHpii9qzYF8rQ7eGyGBg&s",
			"https://i.pinimg.com/originals/83/a7/01/83a70124e330c298f35bdfdce2b3a9d9.jpg",
			"https://img2.tradewheel.com/uploads/images/products/1/6/h-amp-d-hot-selling-women39s-fashion-apparel-office-dress-african-clothes-slim-clothing-women-design1-0250051001591099883.jpg.webp",
		],
		reviews: [
			{ id: 1, user: "Alice", comment: "Great service!", stars: 5 },
			{ id: 2, user: "Bob", comment: "Loved the dress!", stars: 4 },
		],
	};

	const [followers, setFollowers] = useState(["John Doe", "Alice Smith"]);
	const [following, setFollowing] = useState(["Jane Doe"]);
	const [isFollowing, setIsFollowing] = useState(
		following.includes(tailor.name)
	);
	const [likes, setLikes] = useState(Array(tailor.gallery.length).fill(0));
	const [saved, setSaved] = useState(Array(tailor.gallery.length).fill(false));

	const handleFollowClick = () => {
		if (userId === tailor.id) {
			alert("You cannot follow yourself!");
			return;
		}
		if (!isFollowing) {
			setFollowers([...followers, "You"]);
			setFollowing([...following, tailor.name]);
		} else {
			setFollowers(followers.filter((f) => f !== "You"));
			setFollowing(following.filter((f) => f !== tailor.name));
		}
		setIsFollowing(!isFollowing);
	};

	const handleLikeClick = (index) => {
		const updatedLikes = [...likes];
		updatedLikes[index] += 1;
		setLikes(updatedLikes);
	};

	const handleSaveClick = (index) => {
		const updatedSaved = [...saved];
		updatedSaved[index] = !updatedSaved[index];
		setSaved(updatedSaved);
	};

	const handleDownloadClick = (imageUrl) => {
		const link = document.createElement("a");
		link.href = imageUrl;
		link.download = "TailorImage";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<div className='flex bg-black min-h-screen'>
			{/* Sidebar */}
			<div className='fixed top-0 left-0 w-64 bg-gray-800 shadow-md h-full p-6 lg:block sm:w-48 xl:w-64'>
				<h2 className='text-2xl font-bold text-white mb-6 text-lg sm:text-xl'>
					Tailor Dashboard
				</h2>
				<ul className='space-y-8'>
					<li
						className='flex items-center mb-8 cursor-pointer text-white'
						onClick={() => navigate("/chat")}
					>
						<FaInbox className='mr-4' />
						<span className='text-sm sm:text-base md:text-lg'>Inbox</span>
					</li>
					<li
						className='flex items-center mb-8 cursor-pointer text-white'
						onClick={() => navigate("/clients")}
					>
						<FaUsers className='mr-4' />
						<span className='text-sm sm:text-base md:text-lg'>Clients</span>
					</li>
					<li
						className='flex items-center mb-8 cursor-pointer text-white'
						onClick={() => navigate("/create")}
					>
						<FaBook className='mr-4' />
						<span className='text-sm sm:text-base md:text-lg'>Create</span>
					</li>
					<li
						className='flex items-center mb-8 cursor-pointer text-white'
						onClick={() => navigate("/settings")}
					>
						<FaCog className='mr-4' />
						<span className='text-sm sm:text-base md:text-lg'>Settings</span>
					</li>
				</ul>
			</div>

			{/* Main Content */}
			<div className='flex-1 p-6 lg:ml-64 sm:ml-48 xl:ml-64'>
				<div className='container mx-auto p-6 max-w-4xl bg-white shadow-lg rounded-lg'>
					{/* Tailor Profile Section */}
					<div className='flex flex-col items-center'>
						<img
							src='https://president-tailors.com/wp-content/uploads/2023/03/Tailor-Singapore-Cover-Image-Opt.jpg'
							alt={`${tailor.name}'s Profile`}
							className='rounded-full h-48 w-48 border-4 border-blue-500 object-cover'
						/>
						<h2 className='text-3xl font-bold text-gray-800 mt-4 text-lg sm:text-xl md:text-2xl'>
							{tailor.name}
						</h2>
						<p className='text-gray-600 text-sm sm:text-base'>
							{tailor.location}
						</p>
						<div className='mt-4 text-center'>
							<p className='text-gray-700 text-sm sm:text-base'>
								<span className='font-semibold'>Phone:</span>{" "}
								{tailor.contact.phone}
							</p>
							<p className='text-gray-700 text-sm sm:text-base'>
								<span className='font-semibold'>Email:</span>{" "}
								{tailor.contact.email}
							</p>
						</div>
						<button
							onClick={handleFollowClick}
							className={`${
								isFollowing ? "bg-gray-500" : "bg-blue-500"
							} text-white py-2 px-6 rounded-full mt-6 transition duration-300`}
						>
							{isFollowing ? "Following" : "Follow"}
						</button>
					</div>

					{/* Gallery Section */}
					<div className='mt-10'>
						<h3 className='text-xl font-bold text-gray-800 mb-4 text-lg sm:text-xl md:text-2xl'>
							Gallery
						</h3>
						<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
							{tailor.gallery.map((imageUrl, index) => (
								<div key={index} className='relative'>
									<img
										src={imageUrl}
										alt={`Image ${index + 1}`}
										className='w-full h-64 object-cover rounded-lg'
									/>
									<div className='absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-4'>
										<button
											className='bg-white p-2 rounded-full shadow-md'
											onClick={() => handleLikeClick(index)}
										>
											{likes[index] > 0 ? (
												<FaHeart className='text-red-500' />
											) : (
												<FaRegHeart />
											)}
											<span className='ml-2'>{likes[index]}</span>
										</button>
										<button
											className='bg-white p-2 rounded-full shadow-md'
											onClick={() => handleSaveClick(index)}
										>
											<FaSave
												className={
													saved[index] ? "text-green-500" : "text-gray-500"
												}
											/>
										</button>
										<button
											className='bg-white p-2 rounded-full shadow-md'
											onClick={() => handleDownloadClick(imageUrl)}
										>
											<FaDownload />
										</button>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Reviews Section */}
					<div className='mt-10'>
						<h3 className='text-xl font-bold text-gray-800 text-lg sm:text-xl md:text-2xl'>
							Reviews
						</h3>
						{tailor.reviews.map((review) => (
							<div
								key={review.id}
								className='mt-4 p-4 border border-gray-300 rounded-lg'
							>
								<p className='text-gray-700 font-semibold'>{review.user}</p>
								<p className='text-gray-600'>{review.comment}</p>
								<div className='flex space-x-2 mt-2'>
									{Array(review.stars)
										.fill(0)
										.map((_, index) => (
											<span key={index} className='text-yellow-500'>
												★
											</span>
										))}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TailorProfilePage;
