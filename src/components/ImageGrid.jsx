import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const images = [
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSISxHJY3YNtLeI0P1NTw1RL4MZA8lvPNDybA&s",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqnpbi2lbfbj75ooUxAj1kckJ98nM7x2vY83B1c0wi9-QoOuZxZ3AWj3rqdoGMI643PzA&usqp=CAU",
	"https://i.ytimg.com/vi/nRjtit-U2dE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAc_tiXZehSnPncBSHFIaCrGOZ1uQ",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt3LWHdYgd3PqIWCbMSyQltIV1c7ntCZsOnTMYbxnnbLv1GJYNtI99ACWNkg0M2RKqDWI&usqp=CAU",
	"https://www.europeanceo.com/wp-content/uploads/2016/03/Savile-Row-tailors-are-fighting-to-save-their-heritage.jpg",
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
		<div className='bg-gray-50 py-8'>
			<h2 className='text-3xl font-bold text-center text-gray-800 mb-6'>
				Featured Tailors
			</h2>
			<div className='flex justify-center items-center'>
				<button onClick={prevImage} className='mr-4'>
					Prev
				</button>
				<animated.div style={props} className='w-60 h-60'>
					<img
						src={images[index]}
						alt={`Featured Tailor ${index + 1}`}
						className='w-full h-full rounded-lg shadow-lg object-cover'
					/>
				</animated.div>
				<button onClick={nextImage} className='ml-4'>
					Next
				</button>
			</div>
		</div>
	);
};

export default CustomImageCarousel;
