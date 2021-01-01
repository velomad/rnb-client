import React, { lazy, Suspense } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import { WithLayoutRoute } from "./routers";
import { QueryParamProvider } from "use-query-params";
import { PublicLayout, SecondaryPublicLayout } from "./layouts";
import Loading from "./components/Loading";
import { ScrollToTop } from "./utils";

// const LandingPage = lazy(() => import("./pages/LandingPage"));
// const ProductsPage = lazy(() => import("./pages/ProductsPage"));
// const ProductPage = lazy(() => import("./pages/ProductPage"));
// const DataYugeProductsPage = lazy(() => import("./pages/DataYugePages/ProductsPage"));
// const MobileProductsPage = lazy(() => import("./pages/MobileProductsPage"));

import LandingPage from "./pages/LandingPage";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import DataYugeProductsPage from "./pages/DataYugePages/ProductsPage";
import DataYugeProductPage from "./pages/DataYugePages/ProductPage";
import MobileProductsPage from "./pages/MobileProductsPage";
import Wishlist from "./pages/Wishlist";
import Blogs from "./pages/Blogs";
import {
	BrowserView,
	MobileView,
	isBrowser,
	isMobile,
} from "react-device-detect";
// import DesktopProductPage from "./pages/DataYugePages/ProductPage/DesktopProductPage";

const Routes = () => {
	return (
		// <Suspense fallback={<Loading />}>
		<Router>
			<QueryParamProvider ReactRouterRoute={Route}>
				<ScrollToTop>
					<MobileView>
						<Switch>
							<WithLayoutRoute
								exact
								path="/"
								layout={PublicLayout}
								component={LandingPage}
							/>
							<WithLayoutRoute
								exact
								path="/products"
								layout={PublicLayout}
								component={
									window.innerWidth < 768 ? MobileProductsPage : ProductsPage
								}
							/>
							<WithLayoutRoute
								exact
								path="/items/search"
								layout={PublicLayout}
								component={
									window.innerWidth < 768 ? MobileProductsPage : ProductsPage
								}
							/>
							<WithLayoutRoute
								exact
								path="/product/:id"
								layout={PublicLayout}
								component={ProductPage}
							/>
							<WithLayoutRoute
								exact
								path="/electronic/products"
								layout={PublicLayout}
								component={DataYugeProductsPage}
							/>
							<WithLayoutRoute
								exact
								path="/electronic/items/search"
								layout={PublicLayout}
								component={DataYugeProductsPage}
							/>
							<WithLayoutRoute
								exact
								path="/electronic/product/:productId"
								layout={PublicLayout}
								component={DataYugeProductPage}
							/>
							<WithLayoutRoute
								exact
								path="/wishlist"
								layout={SecondaryPublicLayout}
								component={Wishlist}
							/>
							<WithLayoutRoute
								exact
								path="/Blogs"
								layout={SecondaryPublicLayout}
								component={Blogs}
							/>
							<Route path="*" component={() => "404 NOT FOUND"} />
						</Switch>
					</MobileView>
					<BrowserView>
					<div
					className="text-center mt-20"
					>

						<div>Desktop view is currently under build.</div>
						<div>Though you can access us on your mobile phone</div>
					</div>

					</BrowserView>
				</ScrollToTop>
			</QueryParamProvider>
		</Router>
		// </Suspense>
	);
};

export default Routes;
