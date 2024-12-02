import React, { useState } from "react";

const Settings = () => {
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [notifications, setNotifications] = useState(true);
	const [isDeleting, setIsDeleting] = useState(false);

	// Handle change for password fields
	const handlePasswordChange = (e) => setPassword(e.target.value);
	const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

	// Toggle notifications
	const handleNotificationToggle = () => setNotifications(!notifications);

	// Handle account deletion
	const handleDeleteAccount = () => {
		setIsDeleting(true);
		// Add logic to delete the account, for example, calling an API
		setTimeout(() => {
			alert("Account deleted");
			setIsDeleting(false);
		}, 2000);
	};

	return (
		<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-white shadow-md rounded-lg'>
			<h1 className='text-3xl font-semibold text-gray-800 mb-8 text-center'>
				Account Settings
			</h1>

			{/* Change Password */}
			<section className='space-y-6'>
				<h2 className='text-2xl font-semibold text-gray-700'>
					Change Password
				</h2>
				<div className='flex flex-col space-y-4'>
					<div>
						<label
							htmlFor='password'
							className='text-sm font-medium text-gray-600'
						>
							New Password
						</label>
						<input
							type='password'
							id='password'
							placeholder='Enter your new password'
							className='w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
							value={password}
							onChange={handlePasswordChange}
						/>
					</div>
					<div>
						<label
							htmlFor='confirmPassword'
							className='text-sm font-medium text-gray-600'
						>
							Confirm New Password
						</label>
						<input
							type='password'
							id='confirmPassword'
							placeholder='Confirm your new password'
							className='w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
							value={confirmPassword}
							onChange={handleConfirmPasswordChange}
						/>
					</div>
				</div>
			</section>

			{/* Notification Preferences */}
			<section className='space-y-6 mt-8'>
				<h2 className='text-2xl font-semibold text-gray-700'>
					Notification Preferences
				</h2>
				<div className='flex items-center space-x-4'>
					<label className='text-sm font-medium text-gray-600'>
						Receive notifications for new followers and comments:
					</label>
					<input
						type='checkbox'
						checked={notifications}
						onChange={handleNotificationToggle}
						className='form-checkbox h-5 w-5 text-blue-600'
					/>
				</div>
			</section>

			{/* Delete Account */}
			<section className='space-y-6 mt-8'>
				<h2 className='text-2xl font-semibold text-gray-700'>Delete Account</h2>
				<div className='flex flex-col space-y-4'>
					<p className='text-sm text-gray-600'>
						Once you delete your account, all your data will be permanently
						removed.
					</p>
					<button
						onClick={handleDeleteAccount}
						className='w-full py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300'
						disabled={isDeleting}
					>
						{isDeleting ? "Deleting..." : "Delete My Account"}
					</button>
				</div>
			</section>
		</div>
	);
};

export default Settings;
