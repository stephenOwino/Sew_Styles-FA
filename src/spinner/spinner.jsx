import React, { useEffect } from "react";

const Spinner = ({ name }) => {
	useEffect(() => {
		const styleId = "spinner-keyframes";
		if (!document.getElementById(styleId)) {
			const styleSheet = document.createElement("style");
			styleSheet.id = styleId;
			styleSheet.textContent = `
        @keyframes spin {
          0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }
          100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
      `;
			document.head.appendChild(styleSheet);
		}
	}, []);

	return (
		<div className='flex flex-col items-center justify-center mt-4'>
			<div className='w-8 h-8 border-4 border-gray-200 border-t-4 border-t-blue-500 rounded-full animate-[spin_1s_linear_infinite]'></div>
			{name && (
				<p className='mt-2 text-gray-700 text-lg animate-[fadeIn_0.5s_ease-in]'>
					Welcome back, {name}!
				</p>
			)}
		</div>
	);
};

export default Spinner;
