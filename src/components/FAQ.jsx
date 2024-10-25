import React, { useState } from "react";

const FAQs = () => {
	const [activeIndex, setActiveIndex] = useState(null);

	const faqs = [
		{
			question: "What services does SewStyle offer?",
			answer:
				"SewStyle connects clients with skilled tailors, offering custom clothing, alterations, and design consultations.",
		},
		{
			question: "How do I make a payment?",
			answer:
				"We accept payments through M-Pesa, Visa, MasterCard, and PayPal. Select your preferred method at checkout.",
		},
		{
			question: "How do I contact a tailor?",
			answer:
				"You can contact a tailor directly through their profile on our platform. Each profile includes contact options, including an inbox chat feature for real-time communication.",
		},
		{
			question: "What is the delivery time for my order?",
			answer:
				"Delivery times vary based on the tailor and the complexity of your order. You'll receive an estimated time after placing your order.",
		},
		{
			question: "Can I customize my order?",
			answer:
				"Absolutely! Our platform allows you to specify your preferences and discuss them with your tailor.",
		},
		{
			question: "What if I'm not satisfied with my order?",
			answer:
				"We strive for customer satisfaction. If you're not happy with your order, please contact us, and we'll work to resolve the issue.",
		},
		{
			question: "How can I track my order?",
			answer:
				"After placing your order, you'll receive a confirmation email with tracking information to monitor the status of your order.",
		},
	];

	const toggleAnswer = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<div className='bg-gray-50 p-8'>
			<h2 className='text-3xl font-bold text-center text-gray-800 mb-6'>
				Frequently Asked Questions
			</h2>
			<div className='max-w-2xl mx-auto'>
				{faqs.map((faq, index) => (
					<div key={index} className='mb-4 border-b border-gray-300'>
						<button
							className='w-full text-left py-4 text-lg font-semibold text-gray-800 focus:outline-none transition duration-300 ease-in-out hover:text-blue-600'
							onClick={() => toggleAnswer(index)}
						>
							{faq.question}
						</button>
						{activeIndex === index && (
							<p className='text-gray-700 text-md mt-2'>{faq.answer}</p>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default FAQs;
