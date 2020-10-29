import React from "react";
import "./header.css";
import { Secondary } from './components';
import { Primary } from './components';

const Navbar = () => {

	return (
		<header
			className="bg-white shadow"
			style={{ backgroundColor: "#474747" }}
		>
			<Secondary />
			<Primary />
		</header>
	);
};

export default Navbar;
