import React from "react";
import { Text } from "../../../../../components";
import Chip from "@material-ui/core/Chip";
import "./header.css";

const Header = ({ categoryName }) => {
	return (
		<React.Fragment>
			<div>
				<Text classes="capitalize" weight="600">
					{categoryName}
				</Text>
			</div>
			<div className="col-span-3 space-x-4 space-y-4">
				{[...Array(12)].map(() => (
					<Chip
						className="mt-4"
						size="small"
						label="filter option"
						// onDelete={handleDelete}
					/>
				))}
			</div>
			<div>
				<div class="group inline-block">
					<button class="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32">
						<span class="pr-1 flex-1">
							<Text variant="primary" size="sm" weight="700">
								Dropdown
							</Text>
						</span>
						<span>
							<svg
								class="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
							>
								<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
							</svg>
						</span>
					</button>
					<ul
						class="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32"
					>
						<li class="rounded-sm px-3 py-1 hover:bg-gray-100">
							<Text variant="primary" size="sm">
								Popularity
							</Text>
						</li>
						<li class="rounded-sm px-3 py-1 hover:bg-gray-100">
							<Text variant="primary" size="sm">
								High to low
							</Text>
						</li>
						<li class="rounded-sm px-3 py-1 hover:bg-gray-100">
							<Text variant="primary" size="sm">
								Low to High
							</Text>
						</li>
					</ul>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Header;
