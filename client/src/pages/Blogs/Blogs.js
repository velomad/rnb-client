import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Text } from "../../components";

const Blogs = () => {
	const [blog, setBlog] = useState([]);

	useEffect(async () => {
		try {
			const response = await Axios.get(
				"http://reachnbuy.unitechitsolution.in/AndroidClass/get_blog.php",
			);
			setBlog(response.data.blog_list);
		} catch (e) {
			console.log(e);
		}
	}, []);

	return (
		<div className="p-4 space-y-10 pt-16">
			{blog.map((el, index) => (
				<div className="shadow-xl" key={index}>
					<div>
						<img
							src={el.image}
							className="object-contain"
							width="100%"
							style={{
								borderTopLeftRadius: "10px",
								borderTopRightRadius: "10px",
							}}
						/>
					</div>
					<div
						className="space-y-4 bg-gray-600 p-2 border-b-4 border-pink-600"
						style={{
							borderBottomLeftRadius: "10px",
							borderBottomRightRadius: "10px",
						}}
					>
						<div className="flex justify-between">
							<div>
								<Text size="lg" weight="700" isTitle={true} variant="white">
									{el.title}
								</Text>
							</div>
							<div className="right-0">
								<Text size="md" variant="white">
									{el.date}
								</Text>
							</div>
						</div>

						<div>
							<Text size="sm" variant="white">
								{el.description}
							</Text>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Blogs;
