import React, { lazy, Suspense } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import { WithLayoutRoute } from "./routers";

import { PublicLayout } from "./layouts";
import Loading from "./components/Loading";
import { ScrollToTop } from "./utils";

// const LandingPage = lazy(() => import("./pages/LandingPage"));
// const ProductsPage = lazy(() => import("./pages/ProductsPage"));
// const ProductPage = lazy(() => import("./pages/ProductPage"));
// const DataYugeProductsPage = lazy(() => import("./pages/DataYugePages/ProductsPage"));
// const MobileProductsPage = lazy(() => import("./pages/MobileProductsPage"));

import LandingPage from './pages/LandingPage';
import ProductsPage from './pages/ProductsPage';
import ProductPage from './pages/ProductPage';
import DataYugeProductsPage from './pages/DataYugePages/ProductsPage';
import MobileProductsPage from './pages/MobileProductsPage';

const Routes = () => {
	return (
		// <Suspense fallback={<Loading />}>
			<Router>
				<ScrollToTop>
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
							path="/electronic/products/:category"
							layout={PublicLayout}
							component={DataYugeProductsPage}
						/>
						<Route path="*" component={() => "404 NOT FOUND"} />
					</Switch>
				</ScrollToTop>
			</Router>
		// </Suspense>
	);
};

export default Routes;
