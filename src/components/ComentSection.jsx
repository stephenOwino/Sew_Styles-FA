import React, { useState } from "react";
import ExplorePage from "./Explore";

const CommentsSection = ({ comments, onAddComment }) => {
	const [newComment, setNewComment] = useState("");

	// Handle adding a new comment
	const handleAddComment = () => {
		if (newComment.trim() !== "") {
			onAddComment(newComment); // Pass the comment to the parent
			setNewComment(""); // Clear the input field
		}
	};

	return (
		<div className='w-1/3 p-4 max-h-[80vh] overflow-y-auto'>
			<h3 className='text-xl font-bold mb-4'>Comments</h3>
			<div className='space-y-4'>
				{comments.map((comment, index) => (
					<div key={index}>
						<p className='font-semibold'>{comment.user}:</p>
						<p>{comment.comment}</p>
					</div>
				))}
			</div>

			{/* Add a new comment */}
			<div className='mt-4'>
				<textarea
					value={newComment}
					onChange={(e) => setNewComment(e.target.value)}
					placeholder='Add a comment'
					className='w-full p-2 border border-gray-300 rounded-md'
				/>
				<button
					onClick={handleAddComment}
					className='mt-2 w-full bg-blue-500 text-white py-2 px-4 rounded-md'
				>
					Add Comment
				</button>
			</div>
		</div>
	);
};

export default CommentsSection;
