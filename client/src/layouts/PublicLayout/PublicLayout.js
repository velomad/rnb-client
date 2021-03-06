import { Navbar, Footer } from "./components";
import { SearchSlide } from "../../pages/components";
import { history } from "../../utils";

function PublicLayout(props) {
	const { children, withFooter = true } = props;
	return (
		<div>
			<div
				style={
					window.innerWidth > 769
						? { paddingBottom: "6em" }
						: { paddingBottom: "8em" }
				}
			>
				<Navbar />
			</div>

			{/* activated on searchicon click on mobile view */}
			<SearchSlide />

			<div className="p-0">{children}</div>

			<div
				style={
					history.location.pathname === "/products" ||
					history.location.pathname === "/items/search" ||
					history.location.pathname === history.location.pathname
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
