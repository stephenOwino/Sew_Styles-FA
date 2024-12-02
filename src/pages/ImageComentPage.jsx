import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ImageDisplay from "../components/ImageDisplay";
import CommentsSection from "../components/ComentSection";

const ImageCommentPage = () => {
	const { imageUrl } = useParams(); // Retrieve image URL from route params
	const [comments, setComments] = useState([
		{ user: "Alice", comment: "Great design!" },
		{ user: "Bob", comment: "Love the color!" },
	]);

	// Add a new comment to the list
	const handleAddComment = (comment) => {
		setComments([...comments, { user: "Anonymous", comment }]);
	};

	return (
		<div className='flex gap-8 p-6'>
			{/* Image Display Component */}
			<ImageDisplay imageUrl={imageUrl} />

			{/* Comments Section Component */}
			<CommentsSection comments={comments} onAddComment={handleAddComment} />
		</div>
	);
};

export default ImageCommentPage;
