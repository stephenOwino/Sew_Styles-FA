import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const images = [
	"https://www.tv47.digital/wp-content/uploads/2024/10/Screenshot_20241003_084404_Instagram.jpg",
	"https://delight.ac.ke/wp-content/uploads/2022/08/DSC_0170-scaled.jpg",
	"https://www.intracen.org/sites/default/files/styles/content_100/public/media/image/media_image/2023/03/21/Katush_tailor_Kenya.jpeg?itok=mWtHrGwx",
	"https://vti.ac.ke/wp-content/uploads/2021/12/DSC_0198-bubu-scaled.jpg",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfl_0BxY0DLDeX36VC8ynqM-PatIKJteY9rQ&s",
	"https://img.freepik.com/premium-photo/young-african-dressmaker-woman-sews-clothes-sewing-machine-tlor-office-black-seamstress-women_1356031-1180.jpg?ga=GA1.1.2120994705.1729682321&semt=ais_hybrid",
];

const CustomImageCarousel = () => {
	const [index, setIndex] = useState(0);

	const nextImage = () => {
		setIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	const prevImage = () => {
		setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
	};

	const props = useSpring({
		opacity: 1,
		transform: `rotateY(${index % 2 === 0 ? 0 : 180}deg)`,
		from: { opacity: 0, transform: "rotateY(180deg)" },
	});

	return (
		<div className='bg-transparent py-8'>
			<h2 className='text-3xl font-bold text-center text-white mb-12'>
				Featured Tailors
			</h2>
			<div className='flex justify-center items-center mt-32'>
				<button onClick={prevImage} className='mr-4 text-white'>
					Prev
				</button>
				<animated.div style={props} className='w-72 h-72'>
					{" "}
					{/* Updated size */}
					<img
						src={images[index]}
						alt={`Featured Tailor ${index + 1}`}
						className='w-full h-full rounded-sm shadow-lg object-cover'
					/>
				</animated.div>
				<button onClick={nextImage} className='ml-4 text-white'>
					Next
				</button>
			</div>
		</div>
	);
};

export default CustomImageCarousel;
