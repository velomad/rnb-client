import { Navbar, Footer } from "./components";
import { SearchSlide } from "../../pages/components";

function PublicLayout(props) {
	const { children, withFooter = true } = props;
	return (
		<div>
			<div style={{ paddingBottom: "150px" }}>
				<Navbar />
			</div>

			{/* activated on searchicon click on mobile view */}
			<SearchSlide />

			<div className="p-0">{children}</div>

			<div 
			style={{paddingBottom:50}}
			>{withFooter && <Footer />}</div>
		</div>
	);
}

export default PublicLayout;
