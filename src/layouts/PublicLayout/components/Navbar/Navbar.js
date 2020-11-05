import { useEffect, useState } from "react";
import React from "react";
import "./header.css";
import { Secondary } from "./components";
import { Primary } from "./components";

const Navbar = () => {
	// const [show, setShow] = useState(true);
	// const [scrollPos, setScrollPos] = useState(window.pageYOffset);

	// useEffect(() => {
	// 	window.addEventListener("scroll", handleScroll);

	// 	return () => window.removeEventListener("scroll", handleScroll);
	// }, []);

	// const handleScroll = () => {
	// 	// console.log(document.body.getBoundingClientRect());
	// 	// setScrollPos(document.body.getBoundingClientRect().top);
	// 	// setShow(document.body.getBoundingClientRect().top > scrollPos);

	// 	const currentScrollPos = window.pageYOffset;
	// 	const visible = scrollPos > currentScrollPos;
	// 	setScrollPos(currentScrollPos);
	// 	setShow(visible);
	// };

	return (
		<header
			// className={`fixed top-0 w-full z-30 ${show ? "visible" : "invisible"}`}
			className="bg-gray-900 shadow "
		>
			<Secondary />
			<Primary />
		</header>
	);
};

export default Navbar;
