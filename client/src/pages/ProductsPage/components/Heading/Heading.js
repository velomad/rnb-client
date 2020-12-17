import { Grid } from "@material-ui/core";
import { Text } from "../../../../components";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";

const Heading = ({ category }) => {
	return (
		<div className="grid grid-cols-5 gap-6">
			<div className="flex justify-between">
				<div>
					<Text
						variant="primaryDark"
						classes="uppercase"
						weight="700"
						size="sm"
					>
						filters
					</Text>
				</div>
				<div>
					<div className="flex items-center">
						<DeleteOutlineOutlinedIcon
							fontSize="small"
							className="text-red-500"
						/>
						<Text weight={600} variant="danger" classes="uppercase" size="xs">
							Clear All
						</Text>
					</div>
				</div>
			</div>
			<div className="col-span-3">
				<div className="flex justify-between align-center ml-8">
					<div>
						<Text
							variant="primaryDark"
							classes="uppercase"
							weight="700"
							size="sm"
						>
							{category}
						</Text>
					</div>
					<div>
						<div>
							<div class="group inline-block">
								<button class="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32">
									<span class="pr-1 flex-1">
										<Text variant="primary" size="sm" weight="700">
											SORT BY
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
  transition duration-150 ease-in-out origin-top min-w-32 z-40"
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
					</div>
				</div>
			</div>
		</div>
	);
};

export default Heading;
