import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // Import directly from @testing-library/jest-dom
import App from "./src/App";

test("renders SEW_STYLE text", () => {
	// Render the App component
	render(<App />);

	// Assert that the text is present in the document
	const textElement = screen.getByText(/SEW_STYLE!!/i);
	expect(textElement).toBeInTheDocument();
});
