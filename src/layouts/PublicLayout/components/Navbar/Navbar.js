import React from "react";
import "./header.css";
import { Secondary } from './components';
import { Primary } from './components';

const Navbar = () => {

	return (
		<header
			className="bg-gray-900 shadow"
		>
			<Secondary />
			<Primary />
		</header>
	);
};

export default Navbar;
