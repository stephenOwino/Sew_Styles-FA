import React from "react";

const PaymentMethods = () => {
	return (
		<div className='bg-gray-50 p-8'>
			<h2 className='text-3xl font-bold text-center text-gray-800 mb-6'>
				Accepted Payment Methods
			</h2>
			<div className='flex justify-center space-x-6'>
				<div className='flex flex-col items-center'>
					<img
						src='https://www.kictanet.or.ke/wp-content/uploads/2022/05/lipanampesa.jpeg'
						alt='M-Pesa'
						className='h-12 w-auto'
					/>
					<p className='text-gray-600 text-sm mt-2'>Pay with M-Pesa</p>
				</div>
				<div className='flex flex-col items-center'>
					<img
						src='https://www.visa.co.ke/dam/VCOM/regional/cemea/generic-cemea/pay-with-visa/find-a-card/visa-classic-new-800x450.png'
						alt='Visa'
						className='h-12 w-auto'
					/>
					<p className='text-gray-600 text-sm mt-2'>Visa Card</p>
				</div>
				<div className='flex flex-col items-center'>
					<img
						src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjXQAqH1fvDnOzzOumYgiStyFqpNgcyxmRVBEq6mLSwFTrAH-hHQjYyrUUNXV7N31R0CI&usqp=CAU'
						alt='MasterCard'
						className='h-12 w-auto'
					/>
					<p className='text-gray-600 text-sm mt-2'>MasterCard</p>
				</div>
				<div className='flex flex-col items-center'>
					<img
						src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQswO9V-VpaALLSMtujtcz4kYTKb_pgw5iqJ9F91YZ3c6RIVwbEUWxMFGgGwyi8xWpu5O4&usqp=CAU'
						alt='PayPal'
						className='h-12 w-auto'
					/>
					<p className='text-gray-600 text-sm mt-2'>Pay with PayPal</p>
				</div>
			</div>
		</div>
	);
};

export default PaymentMethods;
