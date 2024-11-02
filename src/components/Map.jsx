import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import "leaflet-geosearch/dist/geosearch.css"; // Import geosearch CSS

// Import marker icon images for customization
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix for marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
	iconRetinaUrl: markerIcon2x,
	iconUrl: markerIcon,
	shadowUrl: markerShadow,
});

// Enhanced Search Control Component for map recentering and zooming
const SearchControl = ({ setPosition }) => {
	const map = useMap();

	useEffect(() => {
		const provider = new OpenStreetMapProvider();
		const searchControl = new GeoSearchControl({
			provider,
			style: "bar",
			autoClose: true,
			keepResult: true,
		});

		// Add search control to the map
		map.addControl(searchControl);

		// Handle location found event
		const handleLocationFound = (result) => {
			console.log("Search Result:", result); // Log the result for debugging
			if (result.location) {
				const { x, y } = result.location; // Coordinates of the location found
				setPosition([y, x]); // Update marker position
				map.setView([y, x], 16); // Center map and zoom to the location
			}
		};

		map.on("geosearch/showlocation", handleLocationFound);

		// Clean up on unmount
		return () => {
			map.removeControl(searchControl);
			map.off("geosearch/showlocation", handleLocationFound); // Clean up event listener
		};
	}, [map, setPosition]);

	return null;
};

const MapComponent = () => {
	const initialPosition = [51.505, -0.09]; // Default map center
	const [position, setPosition] = useState(initialPosition);

	return (
		<div className='relative w-full h-96 md:h-[50vh] lg:h-[60vh] border rounded-lg shadow-lg overflow-hidden'>
			<MapContainer
				center={initialPosition}
				zoom={13}
				className='h-full w-full'
			>
				<TileLayer
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				/>
				<Marker position={position}>
					<Popup>
						You are here! <br /> Easily customizable.
					</Popup>
				</Marker>
				<SearchControl setPosition={setPosition} />{" "}
				{/* Adds enhanced search control */}
			</MapContainer>
		</div>
	);
};

export default MapComponent;
