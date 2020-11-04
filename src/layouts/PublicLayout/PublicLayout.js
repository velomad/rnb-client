import { Navbar, Footer } from "./components";
import { SearchSlide } from "../../pages/components";

function PublicLayout(props) {
	const { children, withFooter = true } = props;
	return (
		<div>
			<Navbar />
			<SearchSlide />

			<div className="p-0">{children}</div>
			{withFooter && <Footer />}
		</div>
	);
}

export default PublicLayout;
