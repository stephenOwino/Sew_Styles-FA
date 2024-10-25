import React from "react";
import { toast } from "react-toastify";
import { useUserProfile } from "../../services/api"; // Adjust based on your API service

const UserProfile = () => {
	const { user, error } = useUserProfile(); // Fetch user data from API

	if (error) {
		toast.error("Failed to fetch user profile");
	}

	return (
		<div className='profile'>
			{user ? (
				<div className='profile-info'>
					<img
						src={user.profilePictureUrl}
						alt='Profile'
						className='profile-picture'
					/>
					<h2 className='username'>{user.username}</h2>
					<p className='email'>{user.email}</p>
					{/* Additional user profile details */}
				</div>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
};

export default UserProfile;
