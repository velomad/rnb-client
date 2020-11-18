import { Navbar, Footer } from "./components";
import { SearchSlide } from "../../pages/components";
import { history } from "../../utils";

function PublicLayout(props) {
	console.log(history.location.pathname);
	const { children, withFooter = true } = props;
	return (
		<div>
			<div style={{ paddingBottom: "160px" }}>
				<Navbar />
			</div>

			{/* activated on searchicon click on mobile view */}
			<SearchSlide />

			<div className="p-0">{children}</div>

			<div
				style={
					history.location.pathname === "/products" ||
					history.location.pathname === "/items/search"
						? { paddingBottom: 50 }
						: null
				}
			>
				{withFooter && <Footer />}
			</div>
		</div>
	);
}

export default PublicLayout;
