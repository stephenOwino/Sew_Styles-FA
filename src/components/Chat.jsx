import React, { useState } from "react";
import Navbar from "../components/Navbar"; // Reusing the Navbar component
import BlueprintBackground from "./Background";

const ChatPage = () => {
	const [conversations, setConversations] = useState([
		{
			id: 1,
			name: "Tailor 1",
			avatar: "path/to/avatar1.jpg", // Replace with actual paths
			messages: [
				{
					text: "Hi, how can I help you?",
					time: "10:00 AM",
					sender: "receiver",
				},
				{
					text: "Looking for a custom suit.",
					time: "10:01 AM",
					sender: "sender",
				},
			],
		},
		{
			id: 2,
			name: "Tailor 2",
			avatar: "path/to/avatar2.jpg",
			messages: [
				{
					text: "Sure, I can assist you with that.",
					time: "09:30 AM",
					sender: "receiver",
				},
				{
					text: "Do you have any design in mind?",
					time: "09:31 AM",
					sender: "receiver",
				},
				{
					text: "Yes, I want a three-piece suit.",
					time: "09:32 AM",
					sender: "sender",
				},
			],
		},
	]);
	const [activeChat, setActiveChat] = useState(conversations[0]); // Set the default active chat
	const [message, setMessage] = useState("");

	const handleSendMessage = () => {
		if (message.trim()) {
			const newMessage = {
				text: message,
				time: new Date().toLocaleTimeString([], {
					hour: "2-digit",
					minute: "2-digit",
				}),
				sender: "sender", // Marking the sender
			};
			setActiveChat((prev) => ({
				...prev,
				messages: [...prev.messages, newMessage],
			}));
			setMessage(""); // Clear the input box
		}
	};

	return (
		<div className='bg-gray-100 min-h-screen flex flex-col'>
			<Navbar /> {/* Reusing Navbar */}
			{/* Chat Interface */}
			<div className='flex flex-1 flex-col md:flex-row'>
				{/* Left-hand side: Recent Conversations */}
				<div className='w-full md:w-1/4 bg-white p-4 rounded-lg shadow-md'>
					<h2 className='text-lg font-semibold mb-4'>Recent Conversations</h2>
					{conversations.map((conv) => (
						<div
							key={conv.id}
							className={`flex items-center p-2 rounded-lg cursor-pointer hover:bg-gray-200 ${
								activeChat.id === conv.id ? "bg-gray-300" : ""
							}`}
							onClick={() => setActiveChat(conv)}
						>
							<img
								src={conv.avatar}
								alt={conv.name}
								className='h-10 w-10 rounded-full mr-2'
							/>
							<div>
								<p className='font-semibold'>{conv.name}</p>
								<p className='text-gray-500 text-sm'>
									{conv.messages[conv.messages.length - 1].text}
								</p>
							</div>
						</div>
					))}
				</div>

				{/* Main Chat Window */}
				<div className='flex-1 bg-white p-4 rounded-lg shadow-md ml-0 md:ml-4 mt-4 md:mt-0'>
					<h2 className='text-lg font-semibold mb-4'>{activeChat.name}</h2>
					<div className='h-[calc(100vh-200px)] overflow-y-auto mb-4 p-2 border rounded-lg border-gray-300'>
						{activeChat.messages.map((msg, index) => (
							<div
								key={index}
								className={`mb-2 flex ${
									msg.sender === "sender" ? "justify-end" : "justify-start"
								}`}
							>
								<div
									className={`p-2 rounded-lg ${
										msg.sender === "sender"
											? "bg-blue-600 text-white"
											: "bg-gray-200 text-black"
									}`}
								>
									<span className='text-gray-600 text-xs'>{msg.time}</span>
									<div className='mt-1'>{msg.text}</div>
								</div>
							</div>
						))}
					</div>

					{/* Input Box for New Messages */}
					<div className='flex items-center'>
						<input
							type='text'
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							placeholder='Type a message...'
							className='flex-1 border border-gray-300 p-2 rounded-lg'
						/>
						<button
							onClick={handleSendMessage}
							className='ml-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500'
						>
							Send
						</button>
					</div>
				</div>
			</div>
			{/* Notification for New Messages (Placeholder) */}
			{/* You can implement actual notification functionality as per your requirements */}
			<div className='fixed bottom-5 right-5 bg-yellow-400 text-white px-4 py-2 rounded-lg shadow-md'>
				New message received!
			</div>
		</div>
	);
};

export default ChatPage;
