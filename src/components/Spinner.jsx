import React from "react";

const Spinner = ({ isLoading }) => {
	if (!isLoading) return null; // Don't render the spinner if not loading

	return (
		<div className='flex justify-center items-center fixed inset-0 bg-gray-500 bg-opacity-50 z-50'>
			<div className='w-16 h-16 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin'></div>
		</div>
	);
};

export default Spinner;
