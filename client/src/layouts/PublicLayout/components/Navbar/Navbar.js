import { useEffect, useState, useRef, useMemo } from "react";
import React from "react";
import "./header.css";
import { Secondary } from "./components";
import { Primary } from "./components";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

const Navbar = () => {
	const [hideOnScroll, setHideOnScroll] = useState(true);
	useScrollPosition(
		({ prevPos, currPos }) => {
			const isShow = currPos.y > prevPos.y;
			if (isShow !== hideOnScroll) setHideOnScroll(isShow);
		},
		[hideOnScroll],
		false,
		false,
		300,
	);

	console.log(hideOnScroll);

	return useMemo(
		() => (
			<header
				className={`bg-gray-900 shadow fixed w-full z-30 duration-75 shadow-2xl ${
					hideOnScroll ? " ease-in" : "ease-out"
				} ${hideOnScroll ? "visible" : "invisible"} ${
					hideOnScroll
						? "transition"
						: "transform translate-y-0 -translate-y-full"
				} `}
			>
				<div className="">
					<Secondary />
					<Primary />
				</div>
			</header>
		),
		[hideOnScroll],
	);
};

export default Navbar;
