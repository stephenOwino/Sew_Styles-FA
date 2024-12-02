import React from "react";

const ImageDisplay = ({ imageUrl }) => {
	return (
		<div className='w-2/3'>
			<img
				src={decodeURIComponent(imageUrl)}
				alt='Full Image'
				className='w-full h-auto'
			/>
		</div>
	);
};

export default ImageDisplay;
